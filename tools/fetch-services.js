// Caches the World Bank series the services markets are built from, one file
// per indicator-year under build/raw/. No key required, no rate limit worth
// pacing for. Safe to re-run: existing files are skipped.
//
//   node tools/fetch-services.js              the years in markets-meta
//   node tools/fetch-services.js 2023
const fs = require('fs');
const path = require('path');
const { FETCH_YEARS, wbIndicators } = require('./markets-meta.js');

const RAW = path.join(__dirname, '..', 'build', 'raw');
fs.mkdirSync(RAW, { recursive: true });

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

(async () => {
  const years = process.argv.slice(2).filter(a => /^\d{4}$/.test(a));
  for (const year of years.length ? years : FETCH_YEARS.services) {
    for (const ind of wbIndicators()) {
      const out = path.join(RAW, `wb-${ind}-${year}.json`);
      if (fs.existsSync(out)) { console.log(`skip  ${ind} ${year}`); continue; }
      const url = `https://api.worldbank.org/v2/country/all/indicator/${ind}?date=${year}&format=json&per_page=400`;
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(String(res.status));
        const j = await res.json();
        // [0] is paging metadata, [1] the observations.
        const rows = (j[1] || [])
          .filter(r => r.value != null && /^[A-Z]{3}$/.test(r.countryiso3code || ''))
          .map(r => [r.countryiso3code, r.value]);
        fs.writeFileSync(out, JSON.stringify(rows));
        console.log(`ok    ${ind} ${year}  ${rows.length} economies`);
      } catch (e) {
        console.log(`FAIL  ${ind} ${year}  ${e.message}`);
      }
      await sleep(400);
    }
  }
  console.log('done');
})();
