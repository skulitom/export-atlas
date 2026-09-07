# Export Atlas

An interactive dark-mode world map of who sells the world its stuff. Pick one of
forty-six markets — forty in goods, six in services — and the map floods with
that market's own colour —
the deeper the shade, the larger that country's share of world exports. Click any
country for its rank, its share, a note on why it matters, and every other market
it appears in.

**→ [skulitom.github.io/export-atlas](https://skulitom.github.io/export-atlas/)**

No build step is needed to view it: `index.html` is a single self-contained file
with the geometry and data embedded. Open it straight from disk and it works
offline.

## The markets

Forty, grouped in the rail:

| | |
|---|---|
| **Agriculture** (13) | Cocoa · Coffee · Tea · Sugar · Bananas · Olive oil · Wheat · Maize · Rice · Soybeans · Palm oil · Cotton · Cut flowers |
| **Food & drink** (6) | Chocolate · Wine · Spirits · Cheese · Beef · Fish & seafood |
| **Energy** (4) | Crude oil · Refined petroleum · Natural gas & LNG · Coal |
| **Minerals & materials** (6) | Gold · Diamonds · Copper · Iron ore · Aluminium · Fertiliser |
| **Technology** (5) | Semiconductors · Smartphones · Computers · Lithium-ion batteries · Solar panels |
| **Manufactured** (6) | Cars · Aircraft · Ships · Clothing · Watches · Pharmaceuticals |
| **Services** (6) | Commercial services · Travel & tourism · Transport & freight · Finance & insurance · Computing & business services · Intellectual property |

Cocoa and chocolate are deliberately both here, as are crude oil and refined
petroleum, and cotton and clothing. Each pair is the same commodity at two
stages, and the maps are barely recognisable as the same trade. The services
maps are a third thing again: nothing is loaded onto a ship, and the countries
that win are mostly not the ones that win at goods.

## Where the numbers come from

Everything is for **2023**, and the two kinds come from different places for a
reason set out below. Nothing is typed in by hand: `data/trade.json` is
generated, and `tools/audit.js` regenerates it from the cached API responses.

### Goods

Every goods figure is **reported exports to the world for 2023**, pulled from the
[UN Comtrade](https://comtradeplus.un.org/) public preview API at the HS code
shown in the app (`HS 1801` for cocoa beans, `HS 8542` for integrated circuits,
and so on).

**Why 2023.** It is the most recent year with near-complete reporting. Depending
on the market, 88–162 countries filed for 2023 against 80–138 for 2024, so 2024
totals are materially understated — reported crude oil exports fall from $1,130bn
to $948bn purely because fewer countries have filed. 2023 also avoids the 2022
energy price spike, which put crude at $1,353bn and gas at $727bn and would have
made those two markets unrepresentative of anything but that year.

**Mirror estimates.** Some significant exporters file nothing at all. Russia
stopped reporting to Comtrade in 2022 and is absent from crude oil, gas, gold,
wheat, fish, diamonds and copper; Bangladesh, the world's second-largest clothing
exporter, does not file either. Dropping them would be a worse error than
estimating them, so for a curated list of known non-filers the app uses **mirror
data** — the sum of what every other country reports importing from them.
Forty-three figures are sourced this way. Each is marked `EST` in the app and
flagged in `data/trade.json`. Mirror values are CIF (they include freight and
insurance) where reported exports are FOB, so they run a few per cent high.

**One override.** Mirror data normally only fills a hole. There is a single case
where it replaces a country's own filing: the United States reports $4.1bn of
aircraft exports under HS 8802 for 2023 while the rest of the world reports
importing $38.5bn of aircraft from it. American aircraft exports are largely
recorded outside that heading in the Census filing, so the reported figure is not
usable and the mirror is. That override, and the evidence for it, is in
`tools/overrides.js`; the app carries the same explanation on the market itself.
Nothing else is adjusted for merely looking surprising.

**Taiwan** files no data with the UN; Comtrade carries its trade as *Other Asia,
nes*, which is what this project maps to `TWN`. It is the standard workaround and
it matters — Taiwan is the second-largest semiconductor exporter on the map.

### Services

Services do not have HS codes; they are counted in the balance of payments, under
EBOPS categories. UN Comtrade has a services database, and this project does not
use it — because **the United Kingdom does not appear in it at all**, in any year
tested, and neither do the UAE or Canada. A financial services map without the
UK, the second-largest services exporter on earth, is not a map with a gap in it;
it is simply wrong.

So the six services markets come from the **World Bank's WDI series**, built on
IMF balance-of-payments returns, which covers 130–178 economies for 2023 with no
major absentees. Four of them — travel, transport, finance & insurance, and the
computing-and-business-services residual — are shares of commercial service
exports applied to the total, exactly as the World Bank publishes them; the
services total and intellectual property receipts are read directly.

Two things follow from that definition. **Computing & business services is a
residual**: the balance of payments assigns to it whatever is left after travel,
transport, insurance and finance, so it contains the intellectual property market
that is also shown separately. And the World Bank returns its regional and income
aggregates (`WLD`, `EUU`, `OED`) under three-letter codes alongside countries;
they are dropped by intersecting with the map geometry, since they have no shape.

### What these numbers are not

- **Exports are not production.** Switzerland is the world's number two coffee
  exporter and grows none; the Netherlands is the largest cut-flower exporter and
  much of what it sells was grown in Kenya that week. Countries whose ranking
  comes from re-exporting, refining or trading rather than growing or mining are
  tagged `HUB` in the app.
- **Re-exports are counted more than once.** A cocoa bean shipped Côte d'Ivoire →
  Netherlands → Germany appears in all three countries' export figures, so world
  totals exceed world production. This is inherent to trade statistics, not a
  quirk of this dataset.
- **Iran is effectively missing from the crude oil map.** It reports nothing, and
  its main buyers do not report importing from it, so mirror data does not help
  either. Roughly 1.5 million barrels a day leave no trace.
- **The source is reproduced, not cleaned.** Where Comtrade contains an obvious
  filing error — Nigeria's $157m of cut flowers, for instance — the figure is
  left in and labelled rather than quietly deleted. Anything else would make the
  dataset unauditable.
- **The HS code is the definition.** A market is exactly what its heading covers
  and nothing else, which sometimes cuts across the everyday meaning of the word.
  "Ships" is HS 8901, commercial vessels — it excludes yachts, warships and
  dredgers, which sit in neighbouring headings and would otherwise drown out the
  shipbuilding story.
- **Services are booked, not shipped.** A licence can be assigned to a subsidiary
  in a low-tax country and collected there, which is most of why the Netherlands,
  Ireland and Luxembourg stand so far above their size on intellectual property
  and finance. Those are tagged in the app too, as booking centres rather than
  re-export hubs.
- Each market lists its top 30 exporters, which covers 79–99.8% of world exports;
  the remainder is a long tail of small sellers.

Country boundaries are [Natural Earth](https://www.naturalearthdata.com/) 1:50m
admin-0, projected to Natural Earth I and simplified from 95,000 points to 19,000
at build time. Antarctica is dropped so the inhabited world can be drawn larger.

## Running it

```bash
node build.js
```

Reads `data/geo.json`, `data/trade.json` and `src/markets-*.js`; writes
`index.html` (standalone) and `artifact.html` (body fragment for publishing). The
build fails on an unknown ISO code, a duplicate country, or a market whose listed
exporters exceed its stated world total, and warns about notes and hub tags left
stranded by a data refresh.

To refresh the trade data — each step caches to `build/raw/`, so re-running is
cheap and resumable:

```bash
node tools/fetch-trade.js           # goods, one Comtrade call per market-year
node tools/fetch-mirror.js 2023     # mirror estimates for known non-filers
node tools/fetch-services.js        # World Bank series behind the services markets
node tools/audit.js --write
node build.js
```

`node tools/audit.js` with no arguments prints world exports and reporter counts
for every market and year fetched, split by kind — that table is how the reference
year was chosen, and how to choose the next one. Pass `--goods-year` and
`--services-year` to move either independently.

To rebuild the geometry, download [ne_50m_admin_0_countries.geojson](https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_50m_admin_0_countries.geojson)
into `build/raw/` and run `node tools/make-geo.js`.

## Layout

```
index.html          built, and what GitHub Pages serves
build.js            joins geometry + trade data + copy; owns the rail order
src/app.html        the page itself: styles, markup, and all the map code
src/markets-*.js    hand-written only — framing, palette, per-country notes
data/geo.json       238 countries, simplified and pre-projected
data/trade.json     generated — the sourced export figures
tools/markets-meta.js  the one list of what each market is measured on
tools/overrides.js     the documented exceptions to "use what was reported"
tools/                 fetch, audit and geometry scripts
```

Adding a market takes three edits: its HS code or World Bank indicator in
`tools/markets-meta.js`, an entry in one of the `src/markets-*.js` files, and its
id in the `ORDER` list in `build.js` that fixes where it sits in the rail. The
build refuses to run if those three disagree.

The split is deliberate: `src/markets-*.js` holds nothing but prose and colour,
and every number lives in `data/trade.json`. A person edits one, a script
generates the other, and `build.js` joins them.

The map has no runtime dependencies at all — the projection, pan and zoom,
hit-testing and colour scales are a few hundred lines in `src/app.html`. The only
external request the page makes is to Google Fonts, and it degrades to a
system-font stack if that is blocked.

## Licence

Code is MIT (see `LICENSE`). The goods figures are derived from UN Comtrade and
carry [its terms of use](https://shop.un.org/databases#Comtrade); the services
figures from the World Bank's World Development Indicators, released under
[CC BY 4.0](https://datacatalog.worldbank.org/public-licenses#cc-by); country
geometry is from Natural Earth, which is public domain.
