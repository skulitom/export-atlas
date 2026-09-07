// The one list of what each market is measured on, shared by every tool so the
// fetchers and the audit cannot drift apart.
//
//   { hs: '1801' }           goods    - UN Comtrade C/A/HS, HS heading
//   { wb: 'BX...', share }   services - World Bank WDI (IMF balance of payments)
//
// Comma lists are summed per reporter (a market can span several headings).

const MARKETS = {
  // --- goods ---------------------------------------------------------------
  cocoa: { hs: '1801' }, coffee: { hs: '0901' }, tea: { hs: '0902' },
  crude: { hs: '2709' }, gas: { hs: '2711' }, chips: { hs: '8542' },
  cars: { hs: '8703' }, wine: { hs: '2204' }, pharma: { hs: '30' },
  gold: { hs: '7108' }, wheat: { hs: '1001' }, rice: { hs: '1006' },
  palm: { hs: '1511' }, bananas: { hs: '0803' }, fish: { hs: '03' },
  diamonds: { hs: '7102' }, copper: { hs: '2603,7403' }, batteries: { hs: '850760' },
  apparel: { hs: '61,62' }, flowers: { hs: '0603' },
  chocolate: { hs: '1806' }, soy: { hs: '1201' }, beef: { hs: '0201,0202' },
  cheese: { hs: '0406' }, sugar: { hs: '1701' }, olive: { hs: '1509' },
  spirits: { hs: '2208' }, maize: { hs: '1005' }, cotton: { hs: '5201' },
  refined: { hs: '2710' }, coal: { hs: '2701' }, ironore: { hs: '2601' },
  aluminium: { hs: '7601' }, fertiliser: { hs: '31' },
  phones: { hs: '851712,851713' }, computers: { hs: '8471' },
  aircraft: { hs: '8802' }, ships: { hs: '8901' },
  solar: { hs: '854140,854143' }, watches: { hs: '9101,9102' },

  // --- services ------------------------------------------------------------
  // UN Comtrade's own services database is unusable for a world map: the United
  // Kingdom, the second-largest services exporter on earth, files nothing to it
  // in any year, and neither do the UAE or Canada. The World Bank's series,
  // built on IMF balance-of-payments returns, covers 209-220 economies with no
  // major absentees, so services are sourced from there instead.
  //   { wb: 'IND' }                  a value series, read directly
  //   { wb: 'IND', share: 'PCT' }    a share series, applied to the value series
  services: { wb: 'TX.VAL.SERV.CD.WT' },
  travel: { wb: 'TX.VAL.SERV.CD.WT', share: 'BX.GSR.TRVL.ZS' },
  transport: { wb: 'TX.VAL.SERV.CD.WT', share: 'BX.GSR.TRAN.ZS' },
  insfin: { wb: 'TX.VAL.SERV.CD.WT', share: 'BX.GSR.INSF.ZS' },
  othersvc: { wb: 'TX.VAL.SERV.CD.WT', share: 'BX.GSR.CMCP.ZS' },
  royalties: { wb: 'BX.GSR.ROYL.CD' }
};

// Both kinds land on 2023: it is the most recent year with near-complete goods
// reporting, and the World Bank services series is complete for it too.
const REFERENCE_YEAR = { goods: '2023', services: '2023' };

// The app is a time series now, so every year in this range is fetched and
// shipped. 2026 is deliberately absent: annual trade statistics for it do not
// exist yet and will not until 2027. The most recent years are real but thin -
// countries file late, so 2025 has roughly 60% of the reporters 2023 has. The
// audit records the reporter count for every market-year and the app labels
// any year that is materially short of that market's best.
const YEARS = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'];
const FETCH_YEARS = { goods: YEARS, services: YEARS };

const kindOf = (id) => (MARKETS[id] && MARKETS[id].wb ? 'services' : 'goods');
const codeOf = (id) => MARKETS[id].hs;

// Every World Bank indicator any market needs, deduplicated.
const wbIndicators = () => [...new Set(
  Object.values(MARKETS).flatMap(m => (m.wb ? [m.wb, m.share] : [])).filter(Boolean)
)];

const endpoint = () => 'https://comtradeapi.un.org/public/v1/preview/C/A/HS';

module.exports = { MARKETS, REFERENCE_YEAR, YEARS, FETCH_YEARS, kindOf, codeOf, endpoint, wbIndicators };
