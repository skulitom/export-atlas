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
const editorial = ['a', 'b', 'c', 'd', 'e'].flatMap(x => require(`./src/markets-${x}.js`));

// The rail is grouped in this order, and within each group the markets run
// largest first - so the sequence follows the data rather than a hand-kept list.
const GROUPS = [
  'Agriculture', 'Food & drink', 'Energy', 'Minerals & materials',
  'Technology', 'Manufactured', 'Services'
];
// What the app selects on load. The rail starts with the largest market in the
// first group; this is simply the most striking one to open on.
const DEFAULT_MARKET = 'cocoa';

const problems = [];
const warnings = [];
const geoIds = new Set(geo.map(c => c.id));

{
  for (const m of editorial) {
    if (!GROUPS.includes(m.group)) { console.error(`${m.id}: group "${m.group}" is not in GROUPS`); process.exit(1); }
    if (!trade.markets[m.id]) { console.error(`${m.id}: no entry in data/trade.json`); process.exit(1); }
  }
  if (!editorial.some(m => m.id === DEFAULT_MARKET)) { console.error(`DEFAULT_MARKET ${DEFAULT_MARKET} is not defined`); process.exit(1); }
  const size = (m) => trade.markets[m.id].total;
  editorial.sort((a, b) => GROUPS.indexOf(a.group) - GROUPS.indexOf(b.group) || size(b) - size(a));
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
    umbrella: m.umbrella || false, parent: m.partOf || null,
    kind: t.kind, year: t.year, total: t.total, reporters: t.reporters,
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

// --- sector composition ----------------------------------------------------
// A pie of each group needs slices that do not overlap. Two services markets do:
// Commercial Services is the sum of the others, and Intellectual Property is
// counted inside Computing & Business Services. Both are excluded from the
// slices, and each still gets an honest share of the same denominator.
const sectors = {};
for (const g of GROUPS) {
  const inGroup = markets.filter(m => m.group === g);
  const slices = inGroup.filter(m => !m.umbrella && !m.parent);
  const denom = slices.reduce((s, m) => s + m.total, 0);
  sectors[g] = {
    denom: +denom.toFixed(3),
    count: slices.length,
    slices: slices.map(m => ({ id: m.id, name: m.name, color: m.color, total: m.total }))
  };
}
for (const m of markets) {
  // The umbrella market is the sector, so a share of it is not a meaningful number.
  m.share = m.umbrella ? null : +(100 * m.total / sectors[m.group].denom).toFixed(2);
}

// --- inline ----------------------------------------------------------------
// Embedding as a JSON string literal parses faster than an object literal and
// sidesteps every quoting question except the closing-tag one.
const lit = (v) => JSON.stringify(JSON.stringify(v)).replace(/<\//g, '<\\/');

const meta = { sources: trade.sources, fetched: trade.fetched, defaultMarket: DEFAULT_MARKET };

const tpl = fs.readFileSync(here('src', 'app.html'), 'utf8')
  .replace('__GEO__', () => lit(geo))
  .replace('__MARKETS__', () => lit(markets))
  .replace('__META__', () => lit(meta))
  .replace('__SECTORS__', () => lit(sectors));

fs.writeFileSync(here('artifact.html'), tpl);
fs.writeFileSync(here('index.html'),
  '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n' +
  '<meta name="viewport" content="width=device-width,initial-scale=1">\n' +
  `<meta name="description" content="An interactive dark-mode world map of who exports what, across ${markets.length} markets in goods and services. Figures for ${trade.sources.goods.year}.">\n` +
  tpl.replace('</style>', '</style>\n</head>\n<body>') +
  '\n</body>\n</html>\n');

const kb = (f) => (fs.statSync(here(f)).size / 1024).toFixed(0) + ' KB';
const mir = markets.reduce((n, m) => n + m.exporters.filter(e => e[3]).length, 0);
console.log(`built  index.html ${kb('index.html')}   artifact.html ${kb('artifact.html')}`);
const svc = markets.filter(m => m.kind === 'services').length;
console.log(`       ${markets.length} markets (${markets.length - svc} goods, ${svc} services) · ${markets.reduce((a, m) => a + m.exporters.length, 0)} country entries ` +
  `(${mir} mirror-estimated) · ${geo.length} countries drawn`);
