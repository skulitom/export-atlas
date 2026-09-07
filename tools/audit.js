// Turns the cached UN Comtrade responses into a single sourced dataset, and
// reports the coverage that justifies the reference year for each kind.
//
//   node tools/audit.js            reported world exports by market and year
//   node tools/audit.js --write    write data/trade.json at the reference years
//   node tools/audit.js --goods-year 2022 --services-year 2021 --write
const fs = require('fs');
const path = require('path');
const { MARKETS, REFERENCE_YEAR, FETCH_YEARS, kindOf } = require('./markets-meta.js');
const FORCE = require('./overrides.js').forceMirror;

const root = path.join(__dirname, '..');
const RAW = path.join(root, 'build', 'raw');
const TOP_N = 30;           // exporters kept per market
const MIN_SHARE = 0.05;     // ...and only if they clear this % of world exports

const args = process.argv.slice(2);
const argVal = (k, d) => {
  const v = args[args.indexOf(k) + 1];
  return args.includes(k) && /^\d{4}$/.test(v || '') ? v : d;
};
const YEAR = {
  goods: argVal('--goods-year', REFERENCE_YEAR.goods),
  services: argVal('--services-year', REFERENCE_YEAR.services)
};
const WRITE = args.includes('--write');

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

const editorial = ['a', 'b', 'c', 'd', 'e'].flatMap(x => require(path.join(root, 'src', `markets-${x}.js`)));
const geoIds = new Set(JSON.parse(fs.readFileSync(path.join(root, 'data', 'geo.json'), 'utf8')).map(c => c.id));

// --- services: World Bank series ------------------------------------------
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
  return { list, reported: list.length, reportedTotal: total, total };
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
    if (seenKey.has(key)) { console.warn(`  ! duplicate row ${id} ${year} ${key}`); continue; }
    seenKey.add(key);
    byIso.set(iso, (byIso.get(iso) || 0) + d.primaryValue);
  }
  const list = [...byIso].map(([iso, v]) => ({ iso, v: v / 1e9 }));
  const reported = list.length;
  const reportedTotal = list.reduce((s, r) => s + r.v, 0);

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
  return { list, reported, reportedTotal, total: list.reduce((s, r) => s + r.v, 0) };
}

const load = (id, year) => (kindOf(id) === 'services' ? loadServices(id, year) : loadGoods(id, year));

// --- coverage across the fetched years -------------------------------------
for (const kind of ['goods', 'services']) {
  const ids = editorial.map(m => m.id).filter(id => kindOf(id) === kind);
  const years = FETCH_YEARS[kind];
  console.log(`\nREPORTED WORLD EXPORTS — ${kind.toUpperCase()}  (USD bn / reporting countries)`);
  console.log(`  reference year: ${YEAR[kind]}\n`);
  console.log('  market'.padEnd(15) + years.map(y => y.padStart(18)).join(''));
  for (const id of ids) {
    let line = '  ' + id.padEnd(13);
    for (const y of years) {
      const d = load(id, y);
      line += d ? `${d.total.toFixed(0)}bn / ${d.reported}`.padStart(18) : '—'.padStart(18);
    }
    console.log(line);
  }
}

// --- build the dataset at the reference years ------------------------------
const out = {
  sources: {
    goods: { year: YEAR.goods, source: 'UN Comtrade, annual, HS, goods exports to World' },
    services: { year: YEAR.services, source: 'World Bank WDI, from IMF balance-of-payments returns' }
  },
  fetched: new Date().toISOString().slice(0, 10),
  markets: {}
};
const missingNotes = [];
const gaps = [];

console.log('\n\nSOURCED RANKINGS\n');
for (const m of editorial) {
  const kind = kindOf(m.id);
  const d = load(m.id, YEAR[kind]);
  if (!d) { console.log(`${m.id}: NO DATA for ${YEAR[kind]}`); continue; }

  const kept = d.list.filter((r, i) => geoIds.has(r.iso) && i < TOP_N && 100 * r.v / d.total >= MIN_SHARE);
  const rank = new Map(kept.map((r, i) => [r.iso, i + 1]));
  const noteIsos = Object.keys(m.notes || {});
  const nMir = d.list.filter(r => r.mirror).length;

  console.log(`\n── ${m.name}  (${m.hs}, ${YEAR[kind]}) — world total $${d.total.toFixed(1)}bn ` +
    `from ${d.reported} reporters${nMir ? ` + ${nMir} mirrored` : ''}, top ${kept.length} kept`);
  for (const r of kept.slice(0, 8)) {
    console.log(`   ${String(rank.get(r.iso)).padStart(2)}. ${r.iso}  ${r.v.toFixed(2).padStart(9)}bn  ` +
      `${(100 * r.v / d.total).toFixed(1).padStart(5)}%${r.mirror ? '  [mirror]' : ''}`);
  }
  // A country written about that neither reports nor mirrors has no defensible
  // figure at all, and simply will not appear on the map.
  const absent = noteIsos.filter(iso => !d.list.some(r => r.iso === iso));
  if (absent.length) { console.log(`   NO DATA AT ALL: ${absent.join(' ')}`); gaps.push(...absent.map(iso => `${m.id}/${iso}`)); }
  for (const iso of noteIsos) if (!rank.has(iso) && !absent.includes(iso)) missingNotes.push(`${m.id}:${iso}`);

  out.markets[m.id] = {
    kind,
    year: YEAR[kind],
    total: +d.total.toFixed(3),
    reportedTotal: +d.reportedTotal.toFixed(3),
    reporters: d.reported,
    rows: kept.map(r => r.mirror ? [r.iso, +r.v.toFixed(4), 1] : [r.iso, +r.v.toFixed(4)])
  };
}

console.log('\n\nNO DATA AT ALL (written about, neither reported nor mirrored):');
console.log('  ' + (gaps.length ? gaps.join(' ') : 'none'));
console.log('\nORPHANED NOTES (outside the sourced top list):');
console.log('  ' + (missingNotes.length ? missingNotes.join(' ') : 'none'));

if (WRITE) {
  fs.writeFileSync(path.join(root, 'data', 'trade.json'), JSON.stringify(out, null, 1));
  console.log(`\nwrote data/trade.json — goods ${YEAR.goods}, services ${YEAR.services}`);
}
