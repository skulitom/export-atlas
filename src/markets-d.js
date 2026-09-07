// Export Atlas - markets, part 4 of 4. See markets-a.js for the header.

module.exports = [
{
  id: "coal", name: "Coal", emoji: "🪨",
  hs: "HS 2701", unit: "thermal + coking", color: "#7d8794", group: "Energy",
  blurb: "The market everyone expects to be shrinking, which set records instead. Australia and Indonesia sell more than half of it between them, and they sell different things: Indonesia ships cheap thermal coal to Asian power stations, Australia ships the metallurgical coal that steelmaking still has no substitute for.",
  hubs: ["NLD"],
  notes: {
    AUS: "Metallurgical coal for blast furnaces — the part of the coal trade with no ready replacement, since steel needs the carbon, not just the heat.",
    IDN: "The largest thermal coal exporter in the world. Jakarta banned exports outright for a month in 2022 to keep its own power stations fed.",
    RUS: "Rerouted from Europe to China and India after 2022, at a discount and over a rail network that was not built for it.",
    USA: "Exports rise whenever European or Asian prices spike, and fall back when they do not — the swing supplier.",
    COL: "Cerrejón is one of the largest open-pit coal mines on earth, and coal is among Colombia's biggest exports after oil.",
    ZAF: "Richards Bay was built to be the largest coal terminal in the world; exports have been throttled for years by the collapse of the state rail line feeding it.",
    MNG: "Coking coal with effectively one customer across one border: China.",
    CAN: "Almost entirely metallurgical coal from British Columbia, shipped to Asian steelmakers."
  }
},
{
  id: "ironore", name: "Iron Ore", emoji: "⛏️",
  hs: "HS 2601", unit: "ore + concentrates", color: "#a34a3a", group: "Minerals & materials",
  blurb: "After palm oil, the most concentrated market on this map: Australia and Brazil ship roughly three quarters of the world's iron ore, and most of it goes to one country. The Pilbara loads more tonnage than any other mining region on earth, on private railways built for nothing else.",
  hubs: [],
  notes: {
    AUS: "The Pilbara. Iron ore is Australia's single largest export by value and the reason its trade balance is so exposed to Chinese construction.",
    BRA: "Carajás produces the highest-grade ore mined anywhere. The Brumadinho dam collapse in 2019 killed 270 people and cut national output for years.",
    ZAF: "Sishen, connected to the coast by an 861km dedicated ore railway.",
    CAN: "Labrador Trough ore, much of it high-grade pellets for European steelmakers.",
    UKR: "Kryvyi Rih sits close to the front line; the mines have kept running through the war.",
    SWE: "Kiruna, above the Arctic Circle. The mine is undermining the town, so the town is being physically moved, building by building.",
    MRT: "Iron ore is most of Mauritania's exports, hauled to the coast on a train two and a half kilometres long."
  }
},
{
  id: "aluminium", name: "Aluminium", emoji: "🔩",
  hs: "HS 7601", unit: "unwrought metal", color: "#9fb0c4", group: "Minerals & materials",
  blurb: "Aluminium is electricity in solid form: smelting a tonne takes roughly 14 megawatt-hours, so this map tracks cheap power rather than bauxite. That is why Canada, Norway and Iceland smelt ore they do not mine, using hydro, and why the Gulf states smelt using gas.",
  hubs: ["NLD"],
  notes: {
    CAN: "Quebec hydro power, and almost all of the metal crosses one border into the United States.",
    RUS: "Rusal is among the largest producers outside China. Western sanctions reshuffled its customers without stopping its output.",
    ARE: "Emirates Global Aluminium runs on gas, which is the Gulf's version of cheap electricity.",
    IND: "Coal-fired smelting, which makes Indian metal the most carbon-intensive of the large exporters.",
    NOR: "Hydro smelters that have been running since the early 1900s, and one of the lowest carbon footprints per tonne anywhere.",
    ISL: "Roughly three quarters of all the electricity Iceland generates goes into aluminium smelting.",
    BHR: "Alba is one of the largest single-site smelters in the world and a substantial share of the Bahraini economy.",
    MOZ: "The Mozal smelter is one of Mozambique's largest exports — a plant built for the power, not the ore.",
    AUS: "Mines the bauxite, refines the alumina, and exports rather less of the finished metal than you would expect.",
    CHN: "By far the largest producer on earth, and it consumes almost all of its own output."
  }
},
{
  id: "fertiliser", name: "Fertiliser", emoji: "🌱",
  hs: "HS 31", unit: "all nutrients", color: "#78c06b", group: "Minerals & materials",
  blurb: "The quietest strategic market there is. Nitrogen fertiliser is made from natural gas, potash comes out of a handful of ancient salt beds, and Russia and Belarus together hold a large share of both. That is why sanctions in 2022 turned up as a food price problem across Africa and South Asia within months.",
  hubs: ["NLD", "BEL"],
  notes: {
    RUS: "The largest fertiliser exporter in the world across all three nutrients, and the one input sanctions were repeatedly written to avoid disrupting.",
    CAN: "Saskatchewan sits on the largest potash deposit known, and Canada is the swing supplier of it.",
    CHN: "Has repeatedly restricted phosphate and urea exports outright to hold down prices for its own farmers.",
    MAR: "Holds the overwhelming majority of the world's known phosphate rock — a concentration with no parallel in any other essential mineral.",
    BLR: "One of the top potash exporters until sanctions closed its rail route to Lithuanian ports and left it landlocked.",
    SAU: "Cheap gas turned into urea at scale.",
    USA: "A large exporter and a large importer at once, depending on the nutrient.",
    EGY: "Gas-based urea sold into Europe, which competes for the same gas.",
    ISR: "Potash extracted by evaporating the Dead Sea.",
    NGA: "The Dangote plant turned Nigeria from a fertiliser importer into an exporter in a single step.",
    QAT: "Among the largest urea exporters in the world, on the back of North Field gas."
  }
},
{
  id: "phones", name: "Smartphones", emoji: "📱",
  hs: "HS 851712/13", unit: "mobile handsets", color: "#5ec8f0", group: "Technology",
  blurb: "One product, and a supply chain being pulled apart on purpose. China still assembles most of the world's phones, but Vietnam and India have gone from nothing to serious exporters inside a decade — largely because Apple and Samsung decided that having a single manufacturing country was itself the risk.",
  hubs: ["HKG", "ARE", "NLD", "CZE", "SGP"],
  notes: {
    CHN: "The Zhengzhou plant that assembles iPhones can employ 200,000 people in peak season. It is a city built around one product.",
    VNM: "Samsung makes a large share of all its phones here, and is on its own one of Vietnam's biggest exporters.",
    IND: "Went from importing nearly every phone it used to exporting billions of dollars' worth, in about five years, behind tariffs designed to force assembly onshore.",
    HKG: "Transit, not manufacture.",
    ARE: "Dubai is the re-export gateway for handsets moving into Africa, the Middle East and Central Asia.",
    CZE: "A European distribution and configuration hub rather than a factory.",
    KOR: "Designs and sells more phones than it now builds at home.",
    USA: "Designs the highest-value phone in the world and assembles almost none of it."
  }
},
{
  id: "computers", name: "Computers", emoji: "💻",
  hs: "HS 8471", unit: "laptops, servers, drives", color: "#7f9cf5", group: "Technology",
  blurb: "Laptops, servers and storage — and the clearest case of near-shoring on the map. China is still dominant, but Mexico now assembles for the American market and central Europe for the German one. The distance from factory to customer has become part of the specification.",
  hubs: ["NLD", "HKG", "SGP"],
  notes: {
    CHN: "Chongqing and Kunshan between them build a large share of the world's laptops.",
    MEX: "Guadalajara assembles for the United States: a day's drive rather than a month at sea.",
    NLD: "A distribution hub. Very little of this was built in the Netherlands.",
    TWN: "The design houses that actually engineer most of the world's laptops are Taiwanese even when the factory is somewhere else.",
    CZE: "Central Europe's assembly and configuration base for the German market.",
    THA: "The world's hard drive industry is concentrated here — which is why the 2011 floods raised storage prices globally.",
    USA: "Servers and high-end systems, where the value is in the design rather than the assembly.",
    VNM: "The fastest-growing alternative to Chinese assembly."
  }
},
{
  id: "aircraft", name: "Aircraft", emoji: "✈️",
  hs: "HS 8802", unit: "aeroplanes + helicopters", color: "#9ec9e8", group: "Manufactured",
  blurb: "A duopoly with a map to match. Airbus does final assembly in Toulouse and Hamburg, Boeing in Seattle and Charleston, and most other countries here are feeding components into one of those two lines. Brazil and Canada hold the regional-jet niche below them, and nobody else has managed to break in.",
  caveat: "The United States files only $4.1bn of aircraft exports under this heading while the rest of the world reports importing $38.5bn from it, so the figure shown here is the mirror. American aircraft exports are largely recorded outside HS 8802 in the Census filing.",
  hubs: ["IRL"],
  notes: {
    USA: "Boeing and a supplier base built over eighty years. Aircraft are consistently among the largest single manufactured exports the United States has.",
    FRA: "Toulouse. Airbus overtook Boeing on deliveries in 2019 and has stayed ahead every year since.",
    DEU: "Hamburg does A320 final assembly and much of the fuselage work.",
    CAN: "Bombardier's regional jet programme ended up inside Airbus; business jets remain a Canadian industry.",
    GBR: "Wings. Broughton in north Wales builds the wings for almost every Airbus flying.",
    BRA: "Embraer is the only manufacturer to have established itself below 150 seats and stayed there.",
    IRL: "Aircraft leasing is an Irish industry: a large share of the world's leased fleet is owned and managed from Dublin, and the aircraft move on Irish paperwork.",
    ESP: "Tail sections and military transports.",
    ITA: "Fuselage sections for Boeing, and ATR turboprops jointly with France."
  }
},
{
  id: "ships", name: "Ships", emoji: "🚢",
  hs: "HS 8901", unit: "commercial vessels", color: "#3f6f9e", group: "Manufactured",
  blurb: "China, Korea and Japan build about three fifths of the world's commercial shipping between them, and the industry has consolidated so far that an owner wanting a berth today may be quoted a delivery date years out — now one of the binding constraints on replacing the world fleet with cleaner ships. Almost everything else here is a niche: Italy and France are on this map because of cruise ships, Finland because of icebreakers.",
  hubs: [],
  notes: {
    KOR: "Hanwha, HD Hyundai and Samsung. Korea takes most orders for LNG carriers, the most technically demanding ships built.",
    CHN: "Took the volume crown in the 2010s and now leads on container ships and bulk carriers.",
    JPN: "Dominated world shipbuilding until Korea overtook it in the 2000s, and has been slowly ceding ground since.",
    ITA: "Fincantieri builds a large share of the world's cruise ships.",
    DEU: "Meyer Werft, also cruise ships — floated out down a river too narrow for them in a manoeuvre that takes days.",
    NOR: "Specialist offshore, fishing and expedition vessels rather than volume tonnage.",
    NLD: "Dutch yards dominate two odd niches completely: dredgers and superyachts.",
    TUR: "Small and mid-sized vessels, and one of Europe's largest ship recycling industries alongside.",
    VNM: "The low-cost entrant, building hulls for European owners.",
    FIN: "Ice-class ships and icebreakers — a specialism with very few competitors."
  }
},
{
  id: "solar", name: "Solar Panels", emoji: "☀️",
  hs: "HS 854140/43", unit: "photovoltaic modules", color: "#ffd23f", group: "Technology",
  blurb: "The fastest change on this map. China makes roughly four fifths of the world's solar modules, a larger share still of the polysilicon and wafers behind them, and sells three fifths of the exports — the gap being everything it installs at home. It built that position in about fifteen years. Module prices fell by roughly 90% over the same period — which is the entire story of the market in one number.",
  hubs: ["NLD"],
  notes: {
    CHN: "Dominates every step from polysilicon to finished module. The concentration is greater than OPEC ever achieved in oil.",
    VNM: "Assembly capacity built largely by Chinese firms to sit outside American tariffs.",
    MYS: "One of the oldest non-Chinese manufacturing bases, and still one of the largest.",
    THA: "Grew for the same reason as Vietnam, and has been swept into the same tariff investigations.",
    KHM: "A very small economy with a very large solar export line, for the same tariff reason.",
    DEU: "Invented the modern market with its feed-in tariff in 2000, then lost essentially all of the manufacturing to China within a decade.",
    NLD: "A European distribution hub rather than a producer.",
    IND: "Building domestic capacity behind tariff walls, with the explicit aim of not repeating Germany's experience.",
    USA: "Manufacturing is being rebuilt under the Inflation Reduction Act, from a very low base.",
    KOR: "Hanwha Qcells is the last large non-Chinese cell maker with scale."
  }
},
{
  id: "watches", name: "Watches", emoji: "⌚",
  hs: "HS 9101 + 9102", unit: "wrist + pocket watches", color: "#cfa96a", group: "Manufactured",
  blurb: "No market on this map is this concentrated in one small place. Switzerland exports more watches by value than everywhere else combined while making a tiny fraction of the units — a few per cent of the world's watches, and about half of the money. The industry nearly died when quartz arrived in the 1970s, and survived by abandoning the mass market entirely.",
  hubs: ["HKG", "SGP", "ARE"],
  notes: {
    CHE: "The Jura valleys. \"Swiss made\" is a legally defined label, and it is the reason a movement worth a few hundred francs leaves the country worth thousands.",
    HKG: "The trading and re-export hub for Asia, and a mass-market manufacturing base in its own right.",
    CHN: "Makes most of the world's watches by unit and collects very little of the value — the exact inverse of Switzerland.",
    FRA: "Cartier and the other LVMH and Richemont brands, several of which are made in Switzerland and sold from France.",
    DEU: "Glashütte in Saxony, the one serious continental European alternative to the Swiss, rebuilt after reunification.",
    JPN: "Seiko and Citizen. Japan invented the quartz watch that nearly destroyed the Swiss industry, and now competes with it at the top end too.",
    SGP: "A duty-free re-export point into Southeast Asia.",
    ARE: "Dubai sells to the region and to a very large transiting passenger population.",
    GBR: "Mostly re-export and auction: London remains a centre for the secondary market in fine watches."
  }
}
];
