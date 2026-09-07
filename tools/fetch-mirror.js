// Some significant exporters simply do not file with UN Comtrade - Russia
// stopped in 2022, Bangladesh and Iran are chronically absent. Leaving them off
// the map would be a bigger error than estimating them, so for a curated list
// of known non-filers this fetches MIRROR data: everyone else's reported
// imports FROM that country, summed.
//
// Mirror figures are CIF (they include freight and insurance) while reported
// exports are FOB, so they run a few per cent high. Every value sourced this
// way is flagged in data/trade.json and labelled in the app.
//
//   node tools/fetch-mirror.js [year]
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const RAW = path.join(root, 'build', 'raw');
const YEAR = process.argv[2] || '2023';
const FORCE = require('./overrides.js').forceMirror;

const { codeOf, kindOf } = require('./markets-meta.js');

// Countries worth mirroring, per market. Only pairs that are actually missing
// from the reported data get fetched.
const R = 'RUS';
const PAIRS = {
  cocoa: [R, 'SLE', 'VEN'],
  coffee: [R, 'VEN'],
  tea: [R, 'RWA', 'IRN', 'NPL'],
  crude: [R, 'LBY', 'IRN', 'DZA', 'VEN', 'GNQ', 'TCD', 'SSD', 'SYR', 'YEM'],
  gas: [R, 'DZA', 'TKM', 'GNQ', 'IRN', 'LBY'],
  chips: [R],
  cars: [R, 'IRN'],
  wine: [R],
  pharma: [R, 'BGD'],
  gold: [R, 'VEN', 'ZWE', 'TJK', 'SDN', 'IRN'],
  wheat: [R, 'PAK'],
  rice: [R, 'MMR'],
  palm: [R],
  bananas: [R],
  fish: [R, 'FRO'],
  diamonds: [R, 'SLE', 'ZWE', 'LBR', 'GIN'],
  copper: [R, 'IRN', 'LAO', 'TJK'],
  batteries: [R],
  apparel: ['BGD', R, 'NPL', 'SYR', 'MMR'],
  flowers: [R],
  // --- second pass ----------------------------------------------------------
  // Belarus stopped filing alongside Russia, which matters most for potash.
  chocolate: [R, 'BLR'],
  soy: [R],
  beef: [R, 'BLR'],
  cheese: [R, 'BLR'],
  sugar: [R, 'CUB'],
  olive: [R, 'SYR'],
  spirits: [R, 'CUB'],
  maize: [R],
  cotton: [R, 'UZB', 'TKM', 'SYR', 'TJK', 'BEN', 'MLI', 'BFA'],
  refined: [R, 'BLR', 'IRN', 'VEN', 'DZA', 'LBY', 'TKM'],
  coal: [R],
  ironore: [R, 'IRN'],
  aluminium: [R, 'TJK', 'IRN'],
  fertiliser: [R, 'BLR', 'IRN'],
  phones: [R],
  computers: [R],
  ships: [R, 'IRN'],
  aircraft: [R, 'BLR', 'USA'],
  solar: [R],
  watches: [R],
  // --- third pass ------------------------------------------------------------
  tobacco: [R, 'BLR', 'ZWE'],
  rubber: [R, 'MMR', 'LBR'],
  avocado: [R],
  wool: [R, 'SYR'],
  timber: [R, 'BLR'],
  vanilla: [R],
  beer: [R, 'BLR'],
  pork: [R, 'BLR'],
  poultry: [R, 'BLR'],
  uranium: [R, 'UZB', 'NER'],
  electricity: [R, 'BLR', 'IRN', 'TKM', 'LAO'],
  steel: [R, 'BLR', 'IRN', 'VEN'],
  platinum: [R, 'ZWE'],
  nickel: [R, 'CUB'],
  plastics: [R, 'IRN', 'BLR', 'SYR'],
  rareearth: [R, 'MMR'],
  chipgear: [R],
  medical: [R, 'BLR'],
  footwear: [R, 'BLR', 'MMR'],
  cosmetics: [R, 'BLR', 'IRN'],
  // --- fourth pass -----------------------------------------------------------
  sunflower: [R, 'BLR'],
  nuts: [R, 'IRN', 'SYR'],
  citrus: [R, 'IRN', 'SYR'],
  barley: [R, 'BLR', 'SYR'],
  lamb: [R, 'SYR'],
  butter: [R, 'BLR'],
  formula: [R, 'BLR'],
  biofuel: [R, 'BLR'],
  silver: [R, 'BLR'],
  lithium: [R],
  graphite: [R, 'MMR'],
  cement: [R, 'IRN', 'BLR', 'SYR'],
  robots: [R],
  telecom: [R, 'BLR'],
  wind: [R],
  carparts: [R, 'BLR', 'IRN'],
  tyres: [R, 'BLR', 'IRN'],
  cigarettes: [R, 'BLR', 'SYR'],
  furniture: [R, 'BLR'],
  arms: [R, 'BLR', 'IRN'],
  spacecraft: [R, 'IRN']
};

const reporters = JSON.parse(fs.readFileSync(path.join(RAW, 'reporters.json'), 'utf8')).results;
const M49 = {};
for (const r of reporters) if (/^[A-Z]{3}$/.test(r.reporterCodeIsoAlpha3 || '')) M49[r.reporterCodeIsoAlpha3] ||= r.reporterCode;
const importerCodes = reporters.filter(r => !r.isGroup).map(r => r.reporterCode).concat([490]);

const sleep = (ms) => new Promise(r => setTimeout(r, ms));
async function get(url, tries = 6) {
  for (let i = 0; i < tries; i++) {
    const res = await fetch(url, { headers: { accept: 'application/json' } });
    if (res.status === 429 || res.status >= 500) { await sleep(4000 * (i + 1)); continue; }
    if (!res.ok) throw new Error(res.status + ' ' + (await res.text()).slice(0, 160));
    return res.json();
  }
  throw new Error('gave up: ' + url);
}

(async () => {
  const out = {};
  const outFile = path.join(RAW, `mirror-${YEAR}.json`);
  if (fs.existsSync(outFile)) Object.assign(out, JSON.parse(fs.readFileSync(outFile, 'utf8')));

  for (const [market, isos] of Object.entries(PAIRS)) {
    // Services are reported against the world, not against partners, so there
    // is nothing to mirror them with.
    if (kindOf(market) === 'services') continue;
    // Skip anything the country already reported itself.
    const reportedFile = path.join(RAW, `${market}-${YEAR}.json`);
    const reported = new Set();
    if (fs.existsSync(reportedFile)) {
      for (const d of JSON.parse(fs.readFileSync(reportedFile, 'utf8'))) {
        const rr = reporters.find(x => x.reporterCode === d.reporterCode);
        if (rr && d.primaryValue > 0) reported.add(rr.reporterCodeIsoAlpha3);
      }
    }
    for (const iso of isos) {
      const key = `${market}/${iso}`;
      if (out[key] !== undefined) { console.log(`skip  ${key}`); continue; }
      if (reported.has(iso) && !FORCE[key]) { console.log(`self  ${key} — reports its own data, no mirror needed`); continue; }
      if (!M49[iso]) { console.log(`??    ${key} — no M49 code`); continue; }
      const q = new URLSearchParams({
        reporterCode: importerCodes.join(','), period: YEAR, partnerCode: String(M49[iso]),
        partner2Code: '0', cmdCode: codeOf(market), flowCode: 'M', customsCode: 'C00', motCode: '0'
      });
      try {
        const j = await get('https://comtradeapi.un.org/public/v1/preview/C/A/HS?' + q);
        const rows = j.data || [];
        const total = rows.reduce((s, d) => s + (d.primaryValue > 0 ? d.primaryValue : 0), 0) / 1e9;
        out[key] = +total.toFixed(4);
        console.log(`ok    ${key.padEnd(18)} $${total.toFixed(2)}bn  from ${rows.length} importers${j.count >= 500 ? '  ** CAP **' : ''}`);
        fs.writeFileSync(outFile, JSON.stringify(out, null, 1));
      } catch (e) {
        console.log(`FAIL  ${key}  ${e.message}`);
      }
      await sleep(2500);
    }
  }
  console.log('done — ' + Object.keys(out).length + ' mirror estimates');
})();
