// ---------------------------------------------------------------------------
// Export Atlas - markets, part 1 of 2. EDITORIAL CONTENT ONLY.
//
// Every number in the app comes from data/trade.json, which is generated from
// UN Comtrade by tools/fetch-trade.js + tools/audit.js. This file holds only
// what a person wrote: the framing, the palette, and a note on each country
// worth explaining. build.js joins the two.
//
// notes:  ISO3 -> one or two sentences shown when that country is selected.
// hubs:   countries that re-export, refine or trade the good rather than grow
//         or mine it - flagged so the map is not misread.
// ---------------------------------------------------------------------------

module.exports = [
{
  id: "cocoa", name: "Cocoa Beans", emoji: "🍫",
  hs: "HS 1801", unit: "raw beans", color: "#b5713a",
  blurb: "Two neighbouring West African countries grow more than half the world’s cocoa, on millions of smallholder farms. Almost none of it becomes chocolate where it is grown — the beans are shipped north to be ground, and the value is added in Europe.",
  hubs: ["NLD","BEL","MYS"],
  notes: {
    CIV: "The cocoa superpower: roughly 2 million tonnes a year from about a million smallholdings, most of them under five hectares.",
    GHA: "Sells through COCOBOD, a state board that fixes a farmgate price. A failed 2023 harvest and heavy smuggling into neighbouring countries pushed Ghana behind Ecuador for the first time.",
    ECU: "The fastest-growing origin in the world and the home of fine-flavour Nacional cacao. It now out-exports every Asian producer.",
    NGA: "Cocoa was Nigeria’s largest export before oil was found; the sector is being revived to diversify away from crude.",
    CMR: "Distinctive dark-red beans, shipped largely through the port of Douala.",
    NLD: "Amsterdam is the largest cocoa port on earth. The Netherlands grinds and re-exports beans it does not grow.",
    BEL: "Antwerp storage and Belgian grinding capacity. The chocolate reputation sits downstream of the trade, not the farming.",
    PER: "A leading organic and fine-flavour origin, much of it planted as an alternative to coca.",
    DOM: "The world’s largest exporter of certified organic cocoa.",
    IDN: "Once the world’s number three. Export taxes pushed the crop into domestic grinding rather than raw bean exports.",
    BRA: "A major grower that eats almost its entire crop.",
    VEN: "Home of Criollo, the rarest and most prized cacao variety.",
    MEX: "Where cacao was first domesticated and drunk, several thousand years ago."
  }
},
{
  id: "coffee", name: "Coffee", emoji: "☕",
  hs: "HS 0901", unit: "green + roasted", color: "#c0563a",
  blurb: "The clearest case of a market where growing and selling are separate businesses. Brazil leads on beans, but Switzerland, Germany and Italy rank near the top purely by roasting, capsuling and re-exporting what other countries farmed.",
  hubs: ["CHE","DEU","ITA","NLD","FRA","BEL","POL","CAN"],
  notes: {
    BRA: "About a third of all the coffee grown on earth. A single frost in Minas Gerais moves the global price.",
    CHE: "Grows no coffee whatsoever. Switzerland is the world’s number two exporter by value because of capsules — coffee leaves the country worth more per kilo than most of what else does.",
    COL: "The benchmark for washed arabica. The growers’ federation represents roughly 540,000 farming families.",
    VNM: "Built the modern robusta market from almost nothing after 1986. Most instant coffee starts here.",
    DEU: "Hamburg is Europe’s coffee port; Germany roasts and re-exports across the EU.",
    ITA: "Espresso as an export industry — roasted blends, and the machines to make them.",
    ETH: "The botanical birthplace of arabica and the only country with wild coffee forests.",
    IDN: "Sumatran robusta plus the specialty Sulawesi and Java crops.",
    HND: "Central America’s largest producer, having overtaken Guatemala over the last decade.",
    UGA: "Coffee is Uganda’s single biggest export earner.",
    PER: "The largest exporter of organic coffee in the world.",
    IND: "Almost all of it grown in shade, under a forest canopy.",
    KEN: "Small volumes, but Kenyan AA fetches some of the highest auction prices anywhere.",
    CHN: "Yunnan has quietly become a serious arabica origin."
  }
},
{
  id: "tea", name: "Tea", emoji: "🍵",
  hs: "HS 0902", unit: "black + green", color: "#4fbf72",
  blurb: "A market split down the middle. China dominates green tea; black tea is a plantation industry concentrated in Kenya, Sri Lanka and India. Kenya, which had no tea at all before 1903, is now the largest black tea exporter on earth.",
  hubs: ["ARE","POL","DEU","GBR","USA"],
  notes: {
    CHN: "Where tea comes from, and still the largest exporter by value — overwhelmingly green tea.",
    LKA: "Ceylon tea: about a sixth of the world’s tea exports by value, from an island the size of Ireland.",
    KEN: "The largest black tea exporter in the world, mostly CTC leaf bound for teabags in Pakistan, Egypt and Britain.",
    IND: "Assam and Darjeeling are famous, but India drinks around 80% of what it grows.",
    ARE: "Dubai has built a tea blending and re-export hub with no plantations of its own.",
    POL: "A packaging and re-export centre for the EU market.",
    JPN: "Small volumes at very high prices — matcha and sencha.",
    GBR: "Blends and re-exports; the classic tea nation that grows none.",
    ARG: "Bulk low-cost leaf, most of it destined for American iced tea.",
    MWI: "The first country in Africa to grow tea commercially.",
    TWN: "Oolong, sold at some of the highest prices per kilo in the trade."
  }
},
{
  id: "crude", name: "Crude Oil", emoji: "🛢️",
  hs: "HS 2709", unit: "crude petroleum", color: "#8b82ff",
  blurb: "Still the largest traded commodity on earth by value — worth more than every food market on this map put together. The 2022 sanctions on Russia redrew the flow map more than anything since the 1970s without much changing who pumps the most.",
  caveat: "Iran is effectively missing from this map. It files no crude exports, and its main buyers do not report importing them, so roughly a million and a half barrels a day leave no trace in the statistics.",
  hubs: [],
  notes: {
    SAU: "The swing producer: the only country holding meaningful spare capacity, which is what lets OPEC+ move prices at all.",
    RUS: "Since 2022 the barrels have not stopped, they have changed address — Europe out, India and China in, at a discount.",
    USA: "A net crude exporter only since the 2015 repeal of the export ban, on the back of shale. Now the largest producer in the world.",
    CAN: "Alberta oil sands, sold almost entirely to a single customer: the United States.",
    ARE: "Murban crude now trades on its own futures exchange in Abu Dhabi.",
    IRQ: "Oil funds roughly 90% of the Iraqi state budget.",
    NOR: "Revenues feed the world’s largest sovereign wealth fund, worth well over a trillion dollars.",
    NGA: "Africa’s biggest producer, long hampered by theft and pipeline sabotage in the Niger Delta.",
    KAZ: "Landlocked — most of its crude reaches the sea through a single pipeline across Russia.",
    BRA: "Pre-salt fields off Rio have made Brazil one of the fastest-growing exporters of the decade.",
    IRN: "Sanctioned; real volumes are opaque and move mostly to China.",
    GUY: "Had no oil industry at all before 2019 and is now among the fastest-growing economies on earth.",
    VEN: "Sits on the largest proven reserves in the world and exports a fraction of what it once did.",
    ARG: "Vaca Muerta shale is turning a net importer back into an exporter.",
    SSD: "Depends on a pipeline through Sudan to reach any market at all."
  }
},
{
  id: "gas", name: "Natural Gas & LNG", emoji: "🔥",
  hs: "HS 2711", unit: "piped + liquefied", color: "#38c9e0",
  blurb: "Gas used to be a regional business — you sold it to whoever your pipeline reached. Liquefaction made it global, and the scramble to replace Russian pipeline gas in Europe made the United States the largest LNG exporter in the world in under a decade.",
  hubs: ["NLD","BEL"],
  notes: {
    USA: "From zero LNG exports in 2015 to the world’s largest, almost entirely from Gulf Coast terminals fed by shale.",
    QAT: "The North Field is the largest gas field on earth, shared with Iran. Qatar is expanding capacity by about 85% this decade.",
    AUS: "Briefly the world’s top LNG exporter; ships mostly to Japan, China and South Korea.",
    RUS: "Pipeline exports to Europe collapsed after 2022. Power of Siberia to China absorbs only a fraction of the lost volume.",
    NOR: "Became Europe’s single largest gas supplier almost overnight when Russian flows stopped.",
    NLD: "A trading hub rather than a producer now — the giant Groningen field was shut for good in 2024 after years of earthquakes.",
    DZA: "Supplies Italy and Spain through undersea pipelines across the Mediterranean.",
    TKM: "Enormous reserves and effectively one customer: China.",
    BEL: "Zeebrugge is a major LNG re-loading point for the EU.",
    TTO: "One of the earliest LNG exporters to the United States. That trade has since reversed.",
    MOZ: "Vast offshore fields whose development has been repeatedly halted by an insurgency in Cabo Delgado."
  }
},
{
  id: "chips", name: "Semiconductors", emoji: "💾",
  hs: "HS 8542", unit: "integrated circuits", color: "#2fd39a",
  blurb: "The most geographically concentrated market on this map. One company in Taiwan makes the large majority of the world’s most advanced logic chips, and the entire industry ultimately depends on lithography machines built in a single Dutch town.",
  hubs: ["HKG","SGP"],
  notes: {
    TWN: "TSMC alone accounts for the great majority of leading-edge foundry capacity worldwide. At the smallest node sizes there is no substitute.",
    HKG: "Almost pure transit — chips moving between mainland Chinese factories and everyone else.",
    CHN: "By far the largest importer of chips, and a large exporter too: mostly assembly, packaging and re-export rather than fabrication.",
    KOR: "Samsung and SK Hynix dominate memory, which is far more cyclical than logic.",
    SGP: "Both a real fab cluster and a trans-shipment hub for the region.",
    MYS: "Penang has been the world’s back-end assembly and test hub since the 1970s — roughly a tenth of global packaging.",
    USA: "Designs far more than it makes. The CHIPS Act is an attempt to close that gap.",
    JPN: "Lost the chip crown in the 1990s but still supplies critical materials, wafers and equipment.",
    VNM: "The fastest-growing assembly base as firms diversify away from China.",
    DEU: "Dresden is Europe’s largest chip cluster; Infineon leads in automotive power semiconductors.",
    PHL: "A long-established assembly and test location.",
    NLD: "ASML in Veldhoven is the only company on earth that makes EUV lithography machines.",
    ISR: "Intel’s largest fabs outside the United States.",
    IND: "A huge chip design workforce; its first large fabs are only now being built."
  }
},
{
  id: "cars", name: "Cars", emoji: "🚗",
  hs: "HS 8703", unit: "passenger vehicles", color: "#ef4b57",
  blurb: "Germany has led this market by value for decades, but 2023 was the year China passed Japan to become the largest car exporter by unit volume — driven almost entirely by electric vehicles, which barely existed as an export category five years earlier.",
  hubs: ["BEL","NLD"],
  notes: {
    DEU: "The highest value per car of any large exporter. The premium segment is essentially a German industry.",
    JPN: "Held the volume crown for most of the last fifty years and lost it to China in 2023.",
    CHN: "Overtook Japan on units in 2023. BYD outsold Tesla on battery EVs the same year.",
    MEX: "Built to supply the US market under NAFTA and now USMCA. More cars leave Mexico than Spain or Korea.",
    KOR: "Hyundai and Kia went from budget brands to the third-largest carmaking group in the world.",
    ESP: "Europe’s second-largest producer, almost entirely in foreign-owned plants.",
    BEL: "Zeebrugge and Antwerp are the biggest vehicle ports in the world. Most of these cars are simply passing through.",
    GBR: "Volumes are well down since 2016, but the mix is unusually premium — JLR, Bentley, Rolls-Royce, Mini.",
    CZE: "Škoda plus Hyundai and Toyota plants. Cars are around a fifth of all Czech exports.",
    SVK: "Builds more cars per head of population than any other country on earth.",
    SWE: "Volvo has been Chinese-owned since 2010.",
    THA: "The \"Detroit of Asia\" — the assembly base for Japanese makers across Southeast Asia.",
    ZAF: "BMW, Mercedes and VW plants exporting into Europe.",
    ROU: "Dacia — the budget brand that became Renault’s profit engine.",
    MAR: "Tangier has grown into one of Africa’s largest industrial export hubs."
  }
},
{
  id: "wine", name: "Wine", emoji: "🍷",
  hs: "HS 2204", unit: "bottled + bulk", color: "#b83d69",
  blurb: "Three countries sell more than half the world’s wine, and the gap between them is about price rather than volume. France exports fewer litres than Italy and earns roughly 60% more — the appellation system is, commercially, a pricing mechanism.",
  hubs: ["GBR","HKG","SGP","NLD"],
  notes: {
    FRA: "Champagne and Bordeaux alone out-earn most countries’ entire wine industries.",
    ITA: "The largest exporter by volume. Prosecco drove most of the growth of the last fifteen years.",
    ESP: "Ships more litres than France at roughly a fifth of the price per litre — much of it moves in bulk.",
    CHL: "Built on ungrafted vines that survived phylloxera behind the shield of the Andes and the Atacama.",
    AUS: "Lost its largest market almost overnight when China imposed tariffs in 2020. They were lifted in 2024.",
    NZL: "One grape, one region: Marlborough sauvignon blanc is most of this number.",
    USA: "California is the fourth-largest wine producer on earth but drinks most of what it makes.",
    PRT: "Port and Douro reds — and the world’s dominant cork industry alongside.",
    ARG: "Malbec, a grape that nearly died out in France and was reborn in Mendoza.",
    GBR: "Re-exports. London has been a wine trading centre for centuries.",
    ZAF: "Stellenbosch and the Cape, where wine has been made since the 1650s.",
    HKG: "A duty-free auction and re-export hub for fine wine into Asia.",
    GEO: "The oldest continuous winemaking tradition known — roughly 8,000 years, still using buried clay qvevri.",
    MDA: "Wine is a larger share of national exports here than almost anywhere else."
  }
},
{
  id: "pharma", name: "Pharmaceuticals", emoji: "💊",
  hs: "HS 30", unit: "medicaments", color: "#3d9ef0",
  blurb: "A market shaped as much by tax law as by science. Ireland and Belgium rank absurdly high for their size because multinationals book manufacturing and intellectual property there, while India — which supplies a huge share of the world’s actual pills — ranks far lower, because generics are cheap.",
  hubs: ["BEL","NLD","IRL"],
  notes: {
    DEU: "Europe’s largest pharma exporter. BioNTech’s mRNA vaccine alone moved the national trade balance in 2021.",
    CHE: "Roche and Novartis. Pharma is around 40% of everything Switzerland exports.",
    IRL: "Pharma and chemicals are over half of Irish goods exports — a consequence of corporate tax structuring as much as of factories.",
    BEL: "A distribution and repackaging hub for the EU, on a scale far beyond its own consumption.",
    DNK: "Novo Nordisk’s GLP-1 drugs have grown so fast that Danish GDP is now discussed with and without them.",
    IND: "The \"pharmacy of the world\" — a large share of global generic volume, a small share of global value.",
    SVN: "A tiny country with a serious generics industry — Lek and Krka.",
    HUN: "Gedeon Richter, one of the oldest pharmaceutical companies in continental Europe.",
    ISR: "Teva is the largest generic drugmaker in the world."
  }
},
{
  id: "gold", name: "Gold", emoji: "🥇",
  hs: "HS 7108", unit: "unwrought + semi-manufactured", color: "#f0b429",
  blurb: "The gold export map is not a map of gold mines. Four refining and vaulting centres — Switzerland, London, Dubai and Hong Kong — handle most of the flow, because gold gets re-refined, re-cast and re-sold far more often than it gets dug up.",
  hubs: ["CHE","GBR","ARE","HKG","SGP"],
  notes: {
    CHE: "Four refineries, in a country with no gold mines, process a large share of all the gold produced on earth each year.",
    GBR: "London vaults set the benchmark price twice a day. The bars themselves rarely move far.",
    ARE: "Dubai’s gold souk and free zone — and a persistent route for artisanal African gold.",
    HKG: "The traditional gateway into mainland Chinese demand.",
    AUS: "A genuine mining exporter, and the second-largest producer in the world.",
    CAN: "Toronto is also where most of the world’s mining companies are listed.",
    ZAF: "Produced most of the world’s gold for a century. Its mines are now the deepest anywhere, and among the most depleted.",
    GHA: "Africa’s largest producer — the country the British named the Gold Coast.",
    MLI: "Gold is roughly three-quarters of everything Mali exports.",
    RUS: "Was around $18bn before 2022; G7 import bans pushed the trade towards China and the UAE.",
    IDN: "Grasberg in Papua is one of the largest gold and copper deposits ever found.",
    ITA: "Vicenza and Arezzo — jewellery manufacturing at industrial scale.",
    COD: "Much of it artisanal, and much of it smuggled out through neighbouring countries."
  }
}
];
