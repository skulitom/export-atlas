// Pulls reported exports for every market from the UN Comtrade public preview
// API (no key required) and caches one JSON file per market-year under
// build/raw/. Safe to re-run: existing files are skipped.
//
// Goods come from the HS commodity database, services from the EBOPS balance of
// payments database; tools/markets-meta.js says which is which.
//
//   node tools/fetch-trade.js                 every market, its own useful years
//   node tools/fetch-trade.js 2022 2023       those years, every market
const fs = require('fs');
const path = require('path');
const { MARKETS, FETCH_YEARS, kindOf, codeOf, endpoint } = require('./markets-meta.js');

const RAW = path.join(__dirname, '..', 'build', 'raw');
fs.mkdirSync(RAW, { recursive: true });

const reporters = JSON.parse(fs.readFileSync(path.join(RAW, 'reporters.json'), 'utf8')).results;
// Comtrade has no Taiwan reporter; its trade is filed as "Other Asia, nes" (490),
// which is flagged as a group. Include it explicitly - it is decisive for chips.
const codes = reporters.filter(r => !r.isGroup).map(r => r.reporterCode).concat([490]);

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function get(url, tries = 6) {
  for (let i = 0; i < tries; i++) {
    const res = await fetch(url, { headers: { accept: 'application/json' } });
    if (res.status === 429 || res.status >= 500) { await sleep(4000 * (i + 1)); continue; }
    if (!res.ok) throw new Error(res.status + ' ' + (await res.text()).slice(0, 200));
    return res.json();
  }
  throw new Error('gave up after ' + tries + ' tries: ' + url);
}

function url(id, year) {
  const q = { reporterCode: codes.join(','), period: String(year), partnerCode: '0', cmdCode: codeOf(id), flowCode: 'X' };
  // The commodity database splits rows by second partner, customs procedure and
  // mode of transport; the services database has none of those dimensions.
  if (kindOf(id) === 'goods') Object.assign(q, { partner2Code: '0', customsCode: 'C00', motCode: '0' });
  return endpoint(id) + '?' + new URLSearchParams(q);
}

(async () => {
  const cli = process.argv.slice(2).filter(a => /^\d{4}$/.test(a));
  for (const id of Object.keys(MARKETS)) {
    if (kindOf(id) === 'services') continue;   // those come from tools/fetch-services.js
    const years = cli.length ? cli : FETCH_YEARS[kindOf(id)];
    for (const year of years) {
      const out = path.join(RAW, `${id}-${year}.json`);
      if (fs.existsSync(out)) { console.log(`skip  ${id} ${year}`); continue; }
      try {
        const j = await get(url(id, year));
        fs.writeFileSync(out, JSON.stringify(j.data || []));
        const n = new Set((j.data || []).map(d => d.reporterCode)).size;
        console.log(`ok    ${id} ${year}  ${(j.data || []).length} rows / ${n} reporters${j.count >= 500 ? '  ** HIT 500 CAP **' : ''}`);
      } catch (e) {
        console.log(`FAIL  ${id} ${year}  ${e.message}`);
      }
      await sleep(2500);
    }
  }
  console.log('done');
})();
