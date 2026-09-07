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
const REF = trade.reference;

// Rail order is fixed against one reference year. Sorting by the year on screen
// would reshuffle the whole rail every time the slideshow steps.
const sizeAt = (id) => {
  const y = (trade.markets[id] || {}).y || {};
  return (y[REF] || y[Object.keys(y).pop()] || { total: 0 }).total;
};

for (const m of editorial) {
  if (!GROUPS.includes(m.group)) { console.error(`${m.id}: group "${m.group}" is not in GROUPS`); process.exit(1); }
  if (!trade.markets[m.id]) { console.error(`${m.id}: no entry in data/trade.json`); process.exit(1); }
}
if (!editorial.some(m => m.id === DEFAULT_MARKET)) { console.error(`DEFAULT_MARKET ${DEFAULT_MARKET} is not defined`); process.exit(1); }
editorial.sort((a, b) => GROUPS.indexOf(a.group) - GROUPS.indexOf(b.group) || sizeAt(b.id) - sizeAt(a.id));

const markets = editorial.map(m => {
  const rec = trade.markets[m.id];
  if (!m.name || !m.color || !m.blurb || !m.group) problems.push(`${m.id}: missing a required editorial field`);

  const years = {};
  for (const [year, d] of Object.entries(rec.y)) {
    const seen = new Set();
    const rows = [];
    for (const [iso, v, mirror] of d.rows) {
      if (!geoIds.has(iso)) { problems.push(`${m.id} ${year}: no country geometry for ${iso}`); continue; }
      if (seen.has(iso)) { problems.push(`${m.id} ${year}: ${iso} listed twice`); continue; }
      if (!(v > 0)) { problems.push(`${m.id} ${year}: ${iso} has a non-positive value`); continue; }
      seen.add(iso);
      rows.push(mirror ? [iso, v, 1] : [iso, v]);
    }
    const sum = rows.reduce((s, r) => s + r[1], 0);
    if (sum > d.total * 1.0001) problems.push(`${m.id} ${year}: listed exporters (${sum.toFixed(1)}) exceed the world total (${d.total})`);
    years[year] = { total: d.total, reporters: d.reporters, covered: +(100 * sum / d.total).toFixed(1), rows };
  }
  if (!Object.keys(years).length) { problems.push(`${m.id}: no year has any data`); return null; }

  // Hubs and notes are prose, checked once against the reference year - the most
  // completely reported one - rather than against whichever year is on screen.
  const refRows = new Set((years[REF] || years[Object.keys(years).pop()]).rows.map(r => r[0]));
  const hubs = (m.hubs || []).filter(h => {
    if (refRows.has(h)) return true;
    warnings.push(`${m.id}: hub ${h} is outside the sourced top list in ${REF}, dropped`);
    return false;
  });
  const notes = {};
  for (const [iso, text] of Object.entries(m.notes || {})) {
    if (refRows.has(iso)) notes[iso] = text;
    else warnings.push(`${m.id}: note for ${iso} is unused (not in the sourced top list)`);
  }

  return {
    id: m.id, name: m.name, emoji: m.emoji, hs: m.hs, unit: m.unit, color: m.color,
    group: m.group, blurb: m.blurb, caveat: m.caveat || null, hubs,
    umbrella: m.umbrella || false, parent: m.partOf || null,
    kind: rec.kind, notes, years
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

// --- sector composition, per year ------------------------------------------
// A pie of each group needs slices that do not overlap. Two services markets do:
// Commercial Services is the sum of the others, and Intellectual Property is
// counted inside Computing & Business Services. Both are excluded from the
// slices, and each still gets an honest share of the same denominator.
const sectors = {};
for (const year of trade.years) {
  sectors[year] = {};
  for (const g of GROUPS) {
    const slices = markets.filter(m => m.group === g && !m.umbrella && !m.parent && m.years[year]);
    if (!slices.length) continue;
    const denom = slices.reduce((s, m) => s + m.years[year].total, 0);
    sectors[year][g] = {
      denom: +denom.toFixed(3),
      count: slices.length,
      slices: slices.map(m => ({ id: m.id, name: m.name, color: m.color, total: m.years[year].total }))
    };
  }
}

// --- inline ----------------------------------------------------------------
// Embedding as a JSON string literal parses faster than an object literal and
// sidesteps every quoting question except the closing-tag one.
const lit = (v) => JSON.stringify(JSON.stringify(v)).replace(/<\//g, '<\\/');

const meta = {
  years: trade.years,
  reference: REF,
  sources: trade.sources,
  fetched: trade.fetched,
  defaultMarket: DEFAULT_MARKET
};

const tpl = fs.readFileSync(here('src', 'app.html'), 'utf8')
  .replace('__GEO__', () => lit(geo))
  .replace('__MARKETS__', () => lit(markets))
  .replace('__META__', () => lit(meta))
  .replace('__SECTORS__', () => lit(sectors));

const span = `${trade.years[0]}–${trade.years[trade.years.length - 1]}`;
fs.writeFileSync(here('artifact.html'), tpl);
fs.writeFileSync(here('index.html'),
  '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n' +
  '<meta name="viewport" content="width=device-width,initial-scale=1">\n' +
  `<meta name="description" content="An interactive dark-mode world map of who exports what, across ${markets.length} markets in goods and services, ${span}.">\n` +
  tpl.replace('</style>', '</style>\n</head>\n<body>') +
  '\n</body>\n</html>\n');

const kb = (f) => (fs.statSync(here(f)).size / 1024).toFixed(0) + ' KB';
const svc = markets.filter(m => m.kind === 'services').length;
const cells = markets.reduce((n, m) => n + Object.keys(m.years).length, 0);
const mir = markets.reduce((n, m) => n + Object.values(m.years).reduce((k, y) => k + y.rows.filter(r => r[2]).length, 0), 0);
console.log(`built  index.html ${kb('index.html')}   artifact.html ${kb('artifact.html')}`);
console.log(`       ${markets.length} markets (${markets.length - svc} goods, ${svc} services) · ${span} · ` +
  `${cells} market-years · ${mir} mirror-estimated rows`);
