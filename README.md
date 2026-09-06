# Export Atlas

An interactive dark-mode world map of who sells the world its stuff. Pick one of
twenty commodity markets and the map floods with that commodity's own colour —
the deeper the shade, the larger that country's share of world exports. Click any
country for its rank, its share, a note on why it matters, and every other market
it appears in.

**→ [skulitom.github.io/export-atlas](https://skulitom.github.io/export-atlas/)**

No build step is needed to view it: `index.html` is a single self-contained file
with the geometry and data embedded. Open it straight from disk and it works
offline.

## The markets

Cocoa · Coffee · Tea · Crude oil · Natural gas & LNG · Semiconductors · Cars ·
Wine · Pharmaceuticals · Gold · Wheat · Rice · Palm oil · Bananas · Fish &
seafood · Diamonds · Copper · Lithium-ion batteries · Clothing · Cut flowers

## Where the numbers come from

Every figure is **reported goods exports to the world for 2023**, pulled from the
[UN Comtrade](https://comtradeplus.un.org/) public preview API at the HS code
shown in the app (`HS 1801` for cocoa beans, `HS 8542` for integrated circuits,
and so on). Nothing is typed in by hand. `data/trade.json` is generated, and
`tools/audit.js` regenerates it from the cached API responses.

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
Twenty-one figures are sourced this way. Each is marked `EST` in the app and
flagged in `data/trade.json`. Mirror values are CIF (they include freight and
insurance) where reported exports are FOB, so they run a few per cent high.

**Taiwan** files no data with the UN; Comtrade carries its trade as *Other Asia,
nes*, which is what this project maps to `TWN`. It is the standard workaround and
it matters — Taiwan is the second-largest semiconductor exporter on the map.

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
- Each market lists its top 30 exporters, which covers 87–99.6% of world exports;
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
node tools/fetch-trade.js 2023      # reported exports, one call per market
node tools/fetch-mirror.js 2023     # mirror estimates for known non-filers
node tools/audit.js --year 2023 --write
node build.js
```

`node tools/audit.js` with no arguments prints reported world exports and reporter
counts for every market and year fetched — that table is how the reference year
was chosen, and how to choose the next one.

To rebuild the geometry, download [ne_50m_admin_0_countries.geojson](https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_50m_admin_0_countries.geojson)
into `build/raw/` and run `node tools/make-geo.js`.

## Layout

```
index.html          built, and what GitHub Pages serves
build.js            joins geometry + trade data + copy into the page
src/app.html        the page itself: styles, markup, and all the map code
src/markets-*.js    hand-written only — framing, palette, per-country notes
data/geo.json       238 countries, simplified and pre-projected
data/trade.json     generated — the sourced export figures
tools/              fetch, audit and geometry scripts
```

The split is deliberate: `src/markets-*.js` holds nothing but prose and colour,
and every number lives in `data/trade.json`. A person edits one, a script
generates the other, and `build.js` joins them.

The map has no runtime dependencies at all — the projection, pan and zoom,
hit-testing and colour scales are a few hundred lines in `src/app.html`. The only
external request the page makes is to Google Fonts, and it degrades to a
system-font stack if that is blocked.

## Licence

Code is MIT (see `LICENSE`). The trade figures are derived from UN Comtrade and
carry [its terms of use](https://shop.un.org/databases#Comtrade); country
geometry is from Natural Earth, which is public domain.
