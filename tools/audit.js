// Turns the cached source responses into one dataset covering every year, and
// reports the reporter counts that say which years are comparable.
//
//   node tools/audit.js            world exports by market and year
//   node tools/audit.js --write    write data/trade.json
const fs = require('fs');
const path = require('path');
const { MARKETS, REFERENCE_YEAR, YEARS, kindOf } = require('./markets-meta.js');
const FORCE = require('./overrides.js').forceMirror;

const root = path.join(__dirname, '..');
const RAW = path.join(root, 'build', 'raw');
const TOP_N = 30;           // exporters kept per market-year
const MIN_SHARE = 0.05;     // ...and only if they clear this % of world exports
const REF = REFERENCE_YEAR.goods;   // the year the rail order is fixed against

const WRITE = process.argv.includes('--write');

// --- reporter code -> ISO3 -------------------------------------------------
const reporters = JSON.parse(fs.readFileSync(path.join(RAW, 'reporters.json'), 'utf8')).results;
const ISO = { 490: 'TWN' };   // Comtrade files Taiwan as "Other Asia, nes"
for (const r of reporters) {
  const a3 = r.reporterCodeIsoAlpha3;
  if (a3 && /^[A-Z]{3}$/.test(a3) && !ISO[r.reporterCode]) ISO[r.reporterCode] = a3;
}
// Aggregates and residuals that are not countries.
const NOT_A_COUNTRY = new Set(['S19', 'ANS', 'W00', 'ZZZ', 'EUR', 'BLX']);

const mirrors = (y) => {
  const f = path.join(RAW, `mirror-${y}.json`);
  return fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : {};
};

const editorial = ['a', 'b', 'c', 'd', 'e', 'f'].flatMap(x => require(path.join(root, 'src', `markets-${x}.js`)));
const geoIds = new Set(JSON.parse(fs.readFileSync(path.join(root, 'data', 'geo.json'), 'utf8')).map(c => c.id));

// --- services: World Bank series -------------------------------------------
const wb = (ind, year) => {
  const f = path.join(RAW, `wb-${ind}-${year}.json`);
  return fs.existsSync(f) ? new Map(JSON.parse(fs.readFileSync(f, 'utf8'))) : null;
};

function loadServices(id, year) {
  const m = MARKETS[id];
  const val = wb(m.wb, year);
  if (!val) return null;
  const pct = m.share ? wb(m.share, year) : null;
  if (m.share && !pct) return null;
  // The World Bank returns its regional and income aggregates alongside
  // countries, under three-letter codes of their own. Intersecting with the map
  // geometry drops them: WLD and EUU are not countries and have no shape.
  const list = [];
  for (const [iso, v] of val) {
    if (!geoIds.has(iso) || !(v > 0)) continue;
    const x = pct ? v * (pct.get(iso) || 0) / 100 : v;
    if (x > 0) list.push({ iso, v: x / 1e9 });
  }
  list.sort((a, b) => b.v - a.v);
  const total = list.reduce((s, r) => s + r.v, 0);
  return { list, reported: list.length, total };
}

// --- goods: one Comtrade market-year ---------------------------------------
function loadGoods(id, year) {
  const f = path.join(RAW, `${id}-${year}.json`);
  if (!fs.existsSync(f)) return null;
  const rows = JSON.parse(fs.readFileSync(f, 'utf8'));
  const byIso = new Map();
  const seenKey = new Set();
  for (const d of rows) {
    const iso = ISO[d.reporterCode];
    if (!iso || NOT_A_COUNTRY.has(iso)) continue;
    if (!(d.primaryValue > 0)) continue;
    // A market can span several headings (copper, clothing), so values are
    // summed per reporter - but the same heading must never arrive twice.
    const key = iso + '|' + d.cmdCode;
    if (seenKey.has(key)) continue;
    seenKey.add(key);
    byIso.set(iso, (byIso.get(iso) || 0) + d.primaryValue);
  }
  const list = [...byIso].map(([iso, v]) => ({ iso, v: v / 1e9 }));
  const reported = list.length;

  // Fold in mirror estimates for countries that filed nothing themselves.
  for (const [key, v] of Object.entries(mirrors(year))) {
    const [mk, iso] = key.split('/');
    if (mk !== id || !(v > 0)) continue;
    if (byIso.has(iso)) {
      // Only an entry in overrides.js may displace a country's own filing.
      if (!FORCE[key]) continue;
      list[list.findIndex(r => r.iso === iso)] = { iso, v, mirror: true };
      continue;
    }
    list.push({ iso, v, mirror: true });
  }
  list.sort((a, b) => b.v - a.v);
  return { list, reported, total: list.reduce((s, r) => s + r.v, 0) };
}

const load = (id, year) => (kindOf(id) === 'services' ? loadServices(id, year) : loadGoods(id, year));

// --- assemble --------------------------------------------------------------
const out = {
  years: [],
  reference: REF,
  sources: {
    goods: { source: 'UN Comtrade, annual, HS, goods exports to World' },
    services: { source: 'World Bank WDI, from IMF balance-of-payments returns' }
  },
  fetched: new Date().toISOString().slice(0, 10),
  markets: {}
};

const yearsWithData = new Set();
for (const m of editorial) {
  const rec = { kind: kindOf(m.id), notes: m.notes || {}, y: {} };
  for (const year of YEARS) {
    const d = load(m.id, year);
    if (!d || !d.list.length) continue;
    const kept = d.list.filter((r, i) => r.v > 0 && geoIds.has(r.iso) && i < TOP_N && 100 * r.v / d.total >= MIN_SHARE);
    if (!kept.length) continue;
    yearsWithData.add(year);
    rec.y[year] = {
      total: +d.total.toFixed(3),
      reporters: d.reported,
      // Significant figures rather than decimal places: vanilla's smallest listed
      // exporter is under a million dollars, and toFixed(3) rounded it to zero -
      // and rounded enough others up that the rows outran the total.
      rows: kept.map(r => (r.mirror ? [r.iso, +r.v.toPrecision(5), 1] : [r.iso, +r.v.toPrecision(5)]))
    };
  }
  if (!Object.keys(rec.y).length) { console.log(`${m.id}: NO DATA IN ANY YEAR`); continue; }
  out.markets[m.id] = rec;
}
out.years = YEARS.filter(y => yearsWithData.has(y));

// --- report ----------------------------------------------------------------
// Reporter counts are what make a year comparable or not: a market whose 2025
// filing is half its 2023 filing has not halved, it has been half reported.
console.log('\nWORLD EXPORTS BY YEAR  ($bn / reporting countries)\n');
console.log('  market'.padEnd(16) + out.years.map(y => y.slice(2).padStart(13)).join(''));
for (const m of editorial) {
  const rec = out.markets[m.id];
  if (!rec) continue;
  const best = Math.max(...Object.values(rec.y).map(v => v.reporters));
  let line = '  ' + m.id.padEnd(14);
  for (const y of out.years) {
    const v = rec.y[y];
    if (!v) { line += '-'.padStart(13); continue; }
    line += `${v.total.toFixed(0)}/${v.reporters}${v.reporters < best * 0.9 ? '*' : ' '}`.padStart(13);
  }
  console.log(line);
}
console.log("\n  * = under 90% of that market's best reporter count; the total is understated.");

const orphans = [];
for (const m of editorial) {
  const rec = out.markets[m.id];
  if (!rec) continue;
  const ref = rec.y[REF] || rec.y[out.years[out.years.length - 1]];
  const inTop = new Set(ref.rows.map(r => r[0]));
  for (const iso of Object.keys(m.notes || {})) if (!inTop.has(iso)) orphans.push(`${m.id}:${iso}`);
}
console.log(`\nORPHANED NOTES in ${REF} (${orphans.length}):\n  ` + (orphans.join(' ') || 'none'));

if (WRITE) {
  // Readable, but with each row list kept on a single line.
  const json = JSON.stringify(out, (k, v) => (k === 'rows' ? '@@' + JSON.stringify(v) + '@@' : v), 1)
    .replace(/"@@(.*?)@@"/g, (_, g) => g.replace(/\\"/g, '"'));
  const dest = path.join(root, 'data', 'trade.json');
  fs.writeFileSync(dest, json);
  console.log(`\nwrote data/trade.json — ${Object.keys(out.markets).length} markets x ${out.years.length} years, ` +
    `${(fs.statSync(dest).size / 1024).toFixed(0)} KB`);
}
