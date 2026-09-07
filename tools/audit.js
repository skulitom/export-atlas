// Turns the cached UN Comtrade responses into a single sourced dataset, and
// reports how the sourced figures compare with whatever is in src/markets-*.js.
//
//   node tools/audit.js                 coverage across every fetched year
//   node tools/audit.js --year 2024     the same, plus a country-by-country diff
//   node tools/audit.js --year 2024 --write   writes data/trade.json
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const RAW = path.join(root, 'build', 'raw');
const TOP_N = 30;           // exporters kept per market
const MIN_SHARE = 0.05;     // ...and only if they clear this % of world exports

const args = process.argv.slice(2);
const YEAR = (args[args.indexOf('--year') + 1] || '').match(/^\d{4}$/) ? args[args.indexOf('--year') + 1] : null;
const WRITE = args.includes('--write');

// --- reporter code -> ISO3 -------------------------------------------------
const reporters = JSON.parse(fs.readFileSync(path.join(RAW, 'reporters.json'), 'utf8')).results;
const ISO = { 490: 'TWN' };   // Comtrade files Taiwan as "Other Asia, nes"
const NAME = { 490: 'Taiwan (reported as Other Asia, nes)' };
for (const r of reporters) {
  const a3 = r.reporterCodeIsoAlpha3;
  if (a3 && /^[A-Z]{3}$/.test(a3) && !ISO[r.reporterCode]) { ISO[r.reporterCode] = a3; NAME[r.reporterCode] = r.reporterDesc; }
}
// Aggregates and residuals that are not countries.
for (const c of [97, 251 /* keep */, 899, 0]) { }
const NOT_A_COUNTRY = new Set(['S19', 'ANS', 'W00', 'ZZZ', 'X1 ', 'EUR', 'BLX']);

const FORCE = require('./overrides.js').forceMirror;

const mirrors = (y) => {
  const f = path.join(RAW, `mirror-${y}.json`);
  return fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : {};
};

const MARKETS = ['a', 'b', 'c', 'd'].flatMap(x => require(path.join(root, 'src', `markets-${x}.js`)));
const geoIds = new Set(JSON.parse(fs.readFileSync(path.join(root, 'data', 'geo.json'), 'utf8')).map(c => c.id));

// --- read one market-year --------------------------------------------------
function load(id, year) {
  const f = path.join(RAW, `${id}-${year}.json`);
  if (!fs.existsSync(f)) return null;
  const rows = JSON.parse(fs.readFileSync(f, 'utf8'));
  const byIso = new Map();
  const dupCheck = new Set();
  for (const d of rows) {
    const iso = ISO[d.reporterCode];
    if (!iso || NOT_A_COUNTRY.has(iso)) continue;
    if (!(d.primaryValue > 0)) continue;
    // A market can span several HS codes (copper, clothing), so values are
    // summed per reporter - but the same code must never arrive twice.
    const key = iso + '|' + d.cmdCode;
    if (dupCheck.has(key)) { console.warn(`  ! duplicate row ${id} ${year} ${key}`); continue; }
    dupCheck.add(key);
    byIso.set(iso, (byIso.get(iso) || 0) + d.primaryValue);
  }
  const list = [...byIso].map(([iso, v]) => ({ iso, v: v / 1e9 }));
  const reported = list.length;
  const reportedTotal = list.reduce((s, r) => s + r.v, 0);
  // Fold in mirror estimates for countries that filed nothing themselves.
  const mir = mirrors(year);
  for (const [key, v] of Object.entries(mir)) {
    const [mk, iso] = key.split('/');
    if (mk !== id || !(v > 0)) continue;
    if (byIso.has(iso)) {
      // Only an entry in overrides.js may displace a country's own filing.
      if (!FORCE[key]) continue;
      const at = list.findIndex(r => r.iso === iso);
      list[at] = { iso, v, mirror: true };
      continue;
    }
    list.push({ iso, v, mirror: true });
  }
  list.sort((a, b) => b.v - a.v);
  return { list, reported, reportedTotal, total: list.reduce((s, r) => s + r.v, 0), reporters: reported };
}

// --- coverage across the fetched years ------------------------------------
const years = [...new Set(fs.readdirSync(RAW).map(f => (f.match(/-(\d{4})\.json$/) || [])[1]).filter(Boolean))].sort();
console.log('\nREPORTED WORLD EXPORTS BY YEAR  (USD bn / number of reporting countries)\n');
console.log('market'.padEnd(11) + years.map(y => (y + '').padStart(18)).join(''));
for (const m of MARKETS) {
  let line = m.id.padEnd(11);
  for (const y of years) {
    const d = load(m.id, y);
    line += d ? `${d.total.toFixed(0)}bn / ${d.reporters}`.padStart(18) : '—'.padStart(18);
  }
  console.log(line);
}

if (!YEAR) {
  console.log('\nPick a year with --year YYYY to see the country-level diff.\n');
  process.exit(0);
}

// --- sourced ranking for the chosen year ----------------------------------
console.log(`\n\nCOUNTRY DIFF FOR ${YEAR}  (hand-written value -> Comtrade reported)\n`);
const out = { year: YEAR, source: 'UN Comtrade public preview API, annual, HS, exports to World', fetched: new Date().toISOString().slice(0, 10), markets: {} };
const missingNotes = [];
const gaps = [];

for (const m of MARKETS) {
  const d = load(m.id, YEAR);
  if (!d) { console.log(`${m.id}: NO DATA`); continue; }

  const kept = d.list.filter((r, i) => geoIds.has(r.iso) && (i < TOP_N && 100 * r.v / d.total >= MIN_SHARE));
  const rank = new Map(kept.map((r, i) => [r.iso, i + 1]));
  const noteIsos = Object.keys(m.notes || {});
  const nMir = d.list.filter(r => r.mirror).length;

  console.log(`\n── ${m.name}  (${m.hs}, ${YEAR}) — world total $${d.total.toFixed(1)}bn ` +
    `from ${d.reported} reporters${nMir ? ` + ${nMir} mirrored` : ''}, top ${kept.length} kept`);
  for (const r of kept.slice(0, 10)) {
    console.log(`   ${String(rank.get(r.iso)).padStart(2)}. ${r.iso}  ${r.v.toFixed(2).padStart(8)}bn  ` +
      `${(100 * r.v / d.total).toFixed(1).padStart(5)}%${r.mirror ? '  [mirror]' : ''}`);
  }
  // A country I wrote a note about that neither reports nor mirrors: it has no
  // defensible figure at all and will simply not appear on the map.
  const absent = noteIsos.filter(iso => !d.list.some(r => r.iso === iso));
  if (absent.length) { console.log(`   NO DATA AT ALL: ${absent.join(' ')}`); gaps.push(...absent.map(iso => [m.id, iso])); }
  // Notes written for a country that falls outside the sourced top list.
  for (const iso of noteIsos) if (!rank.has(iso) && !absent.includes(iso)) missingNotes.push(`${m.id}:${iso}`);

  out.markets[m.id] = {
    total: +d.total.toFixed(3),
    reportedTotal: +d.reportedTotal.toFixed(3),
    reporters: d.reported,
    listed: kept.length,
    rows: kept.map(r => r.mirror ? [r.iso, +r.v.toFixed(4), 1] : [r.iso, +r.v.toFixed(4)])
  };
}

console.log('\n\nGAPS — listed by hand but absent from Comtrade for this year:');
console.log('  ' + (gaps.length ? gaps.map(g => g.join('/')).join(' ') : 'none'));
console.log('\nORPHANED NOTES — written for a country outside the sourced top list:');
console.log('  ' + (missingNotes.length ? missingNotes.join(' ') : 'none'));

if (WRITE) {
  fs.writeFileSync(path.join(root, 'data', 'trade.json'), JSON.stringify(out, null, 1));
  console.log(`\nwrote data/trade.json (${YEAR})`);
}
