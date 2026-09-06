// Pulls reported exports for every market from the UN Comtrade public preview
// API (no key required) and caches one JSON file per market-year under
// build/raw/. Safe to re-run: existing files are skipped.
//
//   node tools/fetch-trade.js [year ...]
const fs = require('fs');
const path = require('path');

const RAW = path.join(__dirname, '..', 'build', 'raw');
fs.mkdirSync(RAW, { recursive: true });

// HS codes each market is measured on. Comma lists are summed per reporter.
const CODES = {
  cocoa: '1801', coffee: '0901', tea: '0902', crude: '2709', gas: '2711',
  chips: '8542', cars: '8703', wine: '2204', pharma: '30', gold: '7108',
  wheat: '1001', rice: '1006', palm: '1511', bananas: '0803', fish: '03',
  diamonds: '7102', copper: '2603,7403', batteries: '850760',
  apparel: '61,62', flowers: '0603'
};

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

function url(cmd, year) {
  const q = new URLSearchParams({
    reporterCode: codes.join(','), period: String(year), partnerCode: '0',
    partner2Code: '0', cmdCode: cmd, flowCode: 'X', customsCode: 'C00', motCode: '0'
  });
  return 'https://comtradeapi.un.org/public/v1/preview/C/A/HS?' + q;
}

(async () => {
  const years = process.argv.slice(2).length ? process.argv.slice(2) : ['2022', '2023', '2024'];
  for (const year of years) {
    for (const [id, cmd] of Object.entries(CODES)) {
      const out = path.join(RAW, `${id}-${year}.json`);
      if (fs.existsSync(out)) { console.log(`skip  ${id} ${year}`); continue; }
      try {
        const j = await get(url(cmd, year));
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
