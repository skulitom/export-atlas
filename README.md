# Export Atlas

An interactive dark-mode world map of who sells the world its stuff. Pick one of
sixty-six markets — sixty in goods, six in services — and the map floods with
that market's own colour —
the deeper the shade, the larger that country's share of world exports. Click any
country for its rank, its share, a note on why it matters, and every other market
it appears in.

**→ [skulitom.github.io/export-atlas](https://skulitom.github.io/export-atlas/)**

The year strip in the header steps the whole atlas from 2015 to 2025, keeping the
market and the country you are looking at, so it can be played as a slideshow.

No build step is needed to view it: `index.html` is a single self-contained file
with the geometry and data embedded. Open it straight from disk and it works
offline.

## The markets

Sixty-six, grouped in the rail and sorted largest-first inside each group:

| | |
|---|---|
| **Agriculture** (19) | Soybeans · Wheat · Maize · Palm oil · Coffee · Sugar · Timber · Rice · Cotton · Bananas · Rubber · Olive oil · Tobacco · Cut flowers · Cocoa · Tea · Avocados · Wool · Vanilla |
| **Food & drink** (9) | Fish & seafood · Beef · Cheese · Spirits · Wine · Chocolate · Pork · Poultry · Beer |
| **Energy** (6) | Crude oil · Refined petroleum · Natural gas & LNG · Coal · Electricity · Uranium & nuclear fuel |
| **Minerals & materials** (11) | Plastics · Gold · Steel · Copper · Iron ore · Diamonds · Fertiliser · Aluminium · Platinum & palladium · Nickel · Rare earths |
| **Technology** (7) | Semiconductors · Computers · Smartphones · Medical instruments · Lithium-ion batteries · Chipmaking machines · Solar panels |
| **Manufactured** (8) | Cars · Pharmaceuticals · Clothing · Perfume & cosmetics · Footwear · Aircraft · Ships · Watches |
| **Services** (6) | Commercial services · Travel & tourism · Transport & freight · Finance & insurance · Computing & business services · Intellectual property |

Cocoa and chocolate are deliberately both here, as are crude oil and refined
petroleum, and cotton and clothing. Each pair is the same commodity at two
stages, and the maps are barely recognisable as the same trade. So are cotton
and clothing, iron ore and steel, and rubber against the tyres it becomes. The
services maps are a third thing again: nothing is loaded onto a ship, and the countries
that win are mostly not the ones that win at goods.

## Where the numbers come from

Every market runs **2015 to 2025**, and the two kinds come from different places
for a reason set out below. Nothing is typed in by hand: `data/trade.json` is
generated, and `tools/audit.js` regenerates it from the cached API responses.

### Goods

Every goods figure is **reported exports to the world**, pulled from the
[UN Comtrade](https://comtradeplus.un.org/) public preview API at the HS code
shown in the app (`HS 1801` for cocoa beans, `HS 8542` for integrated circuits,
and so on).

**Why the span stops at 2025, and why the late years are marked.** Annual trade
statistics run well behind the calendar. There is no 2026 data at all and will not
be until 2027. The recent years that do exist are real but thin, because countries
file late: crude oil has 101 reporters for 2023, 81 for 2024 and 62 for 2025, and
its reported world total falls from $1,130bn to $948bn to $708bn largely for that
reason rather than any other.

Reading that fall as a collapse in trade would be the single easiest mistake to
make with a slideshow, so the app does not let it pass quietly. Every market-year
carries its reporter count; any year under 90% of that market's best is marked
with a dot on the year strip, and selecting it puts a note at the top of the panel
saying how many countries have filed and that the total is understated. **2023
remains the reference year** — the most recent complete one — and it is what fixes
the rail ordering, so the rail does not reshuffle as the years step.

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
IMF balance-of-payments returns, which covers 130–178 economies with no major
absentees. Four of them — travel, transport, finance & insurance, and the
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
node tools/fetch-trade.js               # goods, one Comtrade call per market-year
node tools/fetch-services.js            # World Bank series behind the services markets
for y in $(seq 2015 2025); do node tools/fetch-mirror.js $y; done
node tools/audit.js --write
node build.js
```

`node tools/audit.js` with no arguments prints world exports and reporter counts
for every market and year, starring any year under 90% of that market's best
filing. That table is how the reference year was chosen and how to choose the
next one; change it in `tools/markets-meta.js` along with the span itself.

The whole refresh is roughly 700 API calls and takes about half an hour, almost
all of it waiting out UN Comtrade's rate limit. Everything caches to `build/raw/`,
so an interrupted run picks up where it stopped.

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

Adding a market takes two edits: its HS code or World Bank indicator in
`tools/markets-meta.js`, and an entry in one of the `src/markets-*.js` files
naming its group. Where it lands in the rail follows from the data — groups run
in the fixed order set in `build.js`, and within a group the markets sort by
world export value. The build refuses to run on a market whose group it does not
recognise, or that has no figures behind it.

Each group header in the rail carries that sector's own export total for the
year on screen — Agriculture is $340bn in 2015 and $506bn in 2023. For services
that figure is the umbrella market rather than the sum of the parts, since the
parts overlap.

The summary panel shows each market's slice of its own sector as a pie, with the
other markets in that group as the remaining slices — clicking one switches to
it. Two services markets overlap the rest and are excluded from the slices, since
including them would double-count: Commercial Services is the sum of the others,
and Intellectual Property is counted inside Computing & Business Services. Both
are declared in `src/markets-e.js` (`umbrella` and `partOf`) and both still show
an honest share of the same denominator.

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
