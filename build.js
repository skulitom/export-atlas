// Joins the hand-written market copy (src/markets-*.js) to the sourced trade
// figures (data/trade.json) and the country geometry (data/geo.json), then
// emits two files from one template:
//   index.html    - a full standalone document, open it straight from disk
//   artifact.html - the same page as a body fragment, for publishing
const fs = require('fs');
const path = require('path');

const here = (...p) => path.join(__dirname, ...p);
const read = (...p) => JSON.parse(fs.readFileSync(here(...p), 'utf8'));

const geo = read('data', 'geo.json');
const trade = read('data', 'trade.json');
const editorial = ['a', 'b', 'c', 'd'].flatMap(x => require(`./src/markets-${x}.js`));

// The rail is grouped, so the running order is declared here rather than being
// an accident of which file a market happens to live in.
const ORDER = [
  'cocoa', 'coffee', 'tea', 'sugar', 'bananas', 'olive', 'wheat', 'maize',
  'rice', 'soy', 'palm', 'cotton', 'flowers',
  'chocolate', 'wine', 'spirits', 'cheese', 'beef', 'fish',
  'crude', 'refined', 'gas', 'coal',
  'gold', 'diamonds', 'copper', 'ironore', 'aluminium', 'fertiliser',
  'chips', 'phones', 'computers', 'batteries', 'solar',
  'cars', 'aircraft', 'ships', 'apparel', 'watches', 'pharma'
];

const problems = [];
const warnings = [];
const geoIds = new Set(geo.map(c => c.id));

{
  const listed = new Set(ORDER), have = new Set(editorial.map(m => m.id));
  for (const id of ORDER) if (!have.has(id)) { console.error(`ORDER names ${id}, which no markets file defines`); process.exit(1); }
  for (const m of editorial) if (!listed.has(m.id)) { console.error(`${m.id} is defined but missing from ORDER`); process.exit(1); }
  if (ORDER.length !== new Set(ORDER).size) { console.error('ORDER contains a duplicate'); process.exit(1); }
  editorial.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id));
}

const markets = editorial.map(m => {
  const t = trade.markets[m.id];
  if (!t) { problems.push(`${m.id}: no entry in data/trade.json`); return null; }
  if (!m.name || !m.color || !m.blurb || !m.group) problems.push(`${m.id}: missing a required editorial field`);

  const seen = new Set();
  const exporters = [];
  for (const [iso, v, mirror] of t.rows) {
    if (!geoIds.has(iso)) { problems.push(`${m.id}: no country geometry for ${iso}`); continue; }
    if (seen.has(iso)) { problems.push(`${m.id}: ${iso} listed twice`); continue; }
    if (!(v > 0)) { problems.push(`${m.id}: ${iso} has a non-positive value`); continue; }
    seen.add(iso);
    // [iso, USD bn, note or null, 1 if the figure is a mirror estimate]
    exporters.push([iso, v, m.notes[iso] || null, mirror ? 1 : 0]);
  }

  const sum = exporters.reduce((s, e) => s + e[1], 0);
  if (sum > t.total * 1.0001) problems.push(`${m.id}: listed exporters (${sum.toFixed(1)}) exceed the world total (${t.total})`);

  // A hub that did not make the sourced top list has nothing to label.
  const hubs = (m.hubs || []).filter(h => {
    if (seen.has(h)) return true;
    warnings.push(`${m.id}: hub ${h} is outside the sourced top ${t.rows.length}, dropped`);
    return false;
  });
  // Same for a note written about a country that did not make the list.
  for (const iso of Object.keys(m.notes || {})) {
    if (!seen.has(iso)) warnings.push(`${m.id}: note for ${iso} is unused (not in the sourced top list)`);
  }

  return {
    id: m.id, name: m.name, emoji: m.emoji, hs: m.hs, unit: m.unit, color: m.color,
    group: m.group, blurb: m.blurb, caveat: m.caveat || null, hubs,
    year: trade.year, total: t.total, reporters: t.reporters,
    covered: +(100 * sum / t.total).toFixed(1),
    exporters
  };
}).filter(Boolean);

if (problems.length) {
  console.error('Build failed:\n  ' + problems.join('\n  '));
  process.exit(1);
}
// Expected as the sourced top list shifts from year to year: prose kept for a
// country that has since dropped out simply goes unused. Summarised, not listed.
if (warnings.length) {
  const dropped = warnings.filter(w => w.includes('dropped'));
  const unused = warnings.filter(w => w.includes('unused'));
  if (dropped.length) console.warn(`hubs dropped (${dropped.length}): ` + dropped.map(w => w.split(' ')[0] + w.split(' ')[2]).join(' '));
  if (unused.length) console.warn(`notes unused (${unused.length}): ` + unused.map(w => w.split(' ')[0] + w.split(' ')[3]).join(' '));
}

// --- inline ----------------------------------------------------------------
// Embedding as a JSON string literal parses faster than an object literal and
// sidesteps every quoting question except the closing-tag one.
const lit = (v) => JSON.stringify(JSON.stringify(v)).replace(/<\//g, '<\\/');

const meta = { year: trade.year, source: trade.source, fetched: trade.fetched };

const tpl = fs.readFileSync(here('src', 'app.html'), 'utf8')
  .replace('__GEO__', () => lit(geo))
  .replace('__MARKETS__', () => lit(markets))
  .replace('__META__', () => lit(meta));

fs.writeFileSync(here('artifact.html'), tpl);
fs.writeFileSync(here('index.html'),
  '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n' +
  '<meta name="viewport" content="width=device-width,initial-scale=1">\n' +
  `<meta name="description" content="An interactive dark-mode world map of who exports what, across ${markets.length} commodity markets. Figures from UN Comtrade, ${trade.year}.">\n` +
  tpl.replace('</style>', '</style>\n</head>\n<body>') +
  '\n</body>\n</html>\n');

const kb = (f) => (fs.statSync(here(f)).size / 1024).toFixed(0) + ' KB';
const mir = markets.reduce((n, m) => n + m.exporters.filter(e => e[3]).length, 0);
console.log(`built  index.html ${kb('index.html')}   artifact.html ${kb('artifact.html')}`);
console.log(`       ${markets.length} markets · ${trade.year} · ${markets.reduce((a, m) => a + m.exporters.length, 0)} country entries ` +
  `(${mir} mirror-estimated) · ${geo.length} countries drawn`);
