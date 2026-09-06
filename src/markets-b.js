// Export Atlas - markets, part 2 of 2. See markets-a.js for the header.

module.exports = [
{
  id: "wheat", name: "Wheat", emoji: "🌾",
  hs: "HS 1001", unit: "grain", color: "#ddd06a",
  blurb: "Only a handful of countries have both the land to grow a surplus and the ports to move it. That makes wheat the most politically sensitive food market on the map: the Black Sea alone supplies roughly a quarter of it, and North Africa and the Middle East depend on that shipping lane for bread.",
  hubs: ["TUR"],
  notes: {
    RUS: "Roughly a fifth of world exports and rising. Two decades ago Russia was a net importer.",
    AUS: "Volumes swing wildly with drought — a bad year can halve the crop.",
    USA: "Once the dominant exporter; its share has fallen steadily as Russia and the Black Sea scaled up.",
    CAN: "High-protein spring wheat, the milling benchmark for bread flour.",
    FRA: "The EU’s largest producer, a traditional supplier to Algeria and Morocco.",
    UKR: "Exports survived the 2022 invasion only through a grain corridor and Danube barges.",
    ROU: "Constanța on the Black Sea became a critical outlet for Ukrainian grain as well as Romanian.",
    IND: "The second-largest producer in the world, but it banned exports in 2022 to protect domestic supply.",
    TUR: "Imports grain, mills it, and exports flour — the largest flour exporter in the world."
  }
},
{
  id: "rice", name: "Rice", emoji: "🍚",
  hs: "HS 1006", unit: "milled + paddy", color: "#e6dcc4",
  blurb: "Half the planet eats rice daily, but only about 10% of the crop is ever traded across a border — most is grown and eaten in the same country. That thin traded layer is why an Indian export restriction can raise prices in West Africa within weeks.",
  hubs: ["BEL","NLD"],
  notes: {
    IND: "About 40% of all rice traded globally by volume, and a third by value. Restrictions on non-basmati exports in 2023 sent world prices to a 15-year high.",
    THA: "The premium end: jasmine rice, and the long-time benchmark for world pricing.",
    VNM: "The Mekong Delta, one of the most productive rice landscapes on earth — and one of the most exposed to salt intrusion.",
    PAK: "Basmati, sold mainly into the Gulf and East Africa.",
    USA: "Arkansas and the Mississippi delta; mostly long-grain, sold to Latin America and Japan.",
    ITA: "Europe’s rice bowl is the Po valley — arborio and carnaroli for risotto.",
    KHM: "Fragrant rice that has repeatedly won international taste competitions.",
    CHN: "A huge producer that is a net importer in most years.",
    URY: "Small country, unusually high yields, almost all of the crop exported."
  }
},
{
  id: "palm", name: "Palm Oil", emoji: "🌴",
  hs: "HS 1511", unit: "crude + refined", color: "#f5892b",
  blurb: "The most concentrated agricultural market in the world: two countries supply roughly 85% of it. Oil palm yields several times more oil per hectare than any alternative crop, which is both why it is everywhere in the food supply and why it drives so much deforestation.",
  hubs: ["NLD","SGP","DEU","IND","DJI","EST"],
  notes: {
    IDN: "Over half of world supply. Jakarta has twice halted exports outright to hold down domestic cooking oil prices.",
    MYS: "The original commercial producer, and still the source of most industry standards and certification.",
    NLD: "Rotterdam refines and re-exports; almost all EU palm oil lands here first.",
    GTM: "The highest yields per hectare in the world, above even Indonesia.",
    COL: "The largest producer in the Americas.",
    SGP: "Head office rather than plantation: the largest palm oil trading houses are Singapore-listed.",
    IND: "Imports crude palm oil, refines it and re-exports some of the product.",
    NGA: "Once the world’s leading exporter, before Southeast Asia took over in the 1960s."
  }
},
{
  id: "bananas", name: "Bananas", emoji: "🍌",
  hs: "HS 0803", unit: "fresh fruit", color: "#f2d94e",
  blurb: "Nearly every exported banana is one clone, the Cavendish, propagated by cuttings — genetically identical worldwide and therefore uniformly vulnerable. Its predecessor, the Gros Michel, was wiped out of commercial trade by Panama disease in the 1950s. A new strain of that same fungus is spreading now.",
  hubs: ["NLD","BEL","USA"],
  notes: {
    ECU: "A quarter of world exports, and the only major exporter where most plantations are locally owned rather than run by multinationals.",
    PHL: "Supplies Japan, Korea and China; hit hard by the latest Panama disease outbreak.",
    CRI: "The original \"banana republic\" economy, and still among the most productive.",
    NLD: "Rotterdam is Europe’s banana gateway. None of these were grown in the Netherlands.",
    BEL: "Antwerp handles a large share of Europe’s fruit imports and re-exports.",
    DOM: "The largest exporter of organic bananas in the world.",
    PER: "A specialist organic and fair-trade origin.",
    IND: "The largest banana producer on earth by a wide margin — and it eats nearly all of them."
  }
},
{
  id: "fish", name: "Fish & Seafood", emoji: "🐟",
  hs: "HS 03", unit: "fresh, frozen, processed", color: "#2f8fd1",
  blurb: "Farmed fish now outweighs wild catch in global supply, and the export map shows it: Norway and Chile rank high almost entirely on salmon, while Ecuador went from a minor player to a top exporter on farmed shrimp in barely a decade.",
  hubs: ["CHN","NLD","SWE","POL"],
  notes: {
    CHN: "Both the largest producer and the world’s processing floor — much of the whitefish caught in the North Pacific is filleted here and re-exported.",
    NOR: "Atlantic salmon, farmed in the fjords, is one of the great export successes of the last forty years.",
    VNM: "Pangasius and shrimp from the Mekong Delta.",
    CHL: "The world’s number two salmon farmer, in fjords on the other side of the planet from Norway.",
    ECU: "Farmed shrimp exports have roughly quadrupled in a decade and now rival bananas as an earner.",
    IND: "Vannamei shrimp, sold mainly to the United States.",
    USA: "Alaska pollock, salmon and crab — much of it exported for processing and then re-imported.",
    RUS: "Pollock and crab from the Sea of Okhotsk.",
    CAN: "Lobster is the single most valuable seafood export.",
    ESP: "Europe’s largest fishing fleet and its biggest seafood consumer per head.",
    SWE: "Mostly Norwegian salmon crossing the border, processed and sent on.",
    THA: "The historic centre of the canned tuna industry.",
    PER: "Anchoveta — the largest single-species fishery in the world, almost all of it turned into fishmeal.",
    POL: "A major processor of imported salmon and herring for the EU market.",
    MAR: "Africa’s largest seafood exporter, built on sardines and octopus.",
    ISL: "Fish is around 40% of Icelandic goods exports.",
    ARG: "Patagonian shrimp and squid.",
    FRO: "The Faroe Islands: 50,000 people, and one of the largest seafood exporters per head on earth."
  }
},
{
  id: "diamonds", name: "Diamonds", emoji: "💎",
  hs: "HS 7102", unit: "rough + polished", color: "#9fe0f0",
  blurb: "Almost all the value here is cutting, not mining. Roughly nine in ten of the world’s diamonds are polished in Surat, India, then traded through Dubai, Antwerp and Tel Aviv. Meanwhile lab-grown stones — chemically identical, far cheaper — have taken a large bite out of the trade in the last five years.",
  hubs: ["ARE","BEL","HKG","ISR","CHE","USA"],
  notes: {
    IND: "Surat cuts and polishes the overwhelming majority of the world’s diamonds — an industry of around a million workers.",
    ARE: "Dubai has overtaken Antwerp as the largest rough diamond trading centre in the world.",
    BEL: "Antwerp ran the global diamond trade for five centuries and still handles an enormous share of it.",
    HKG: "The route into Chinese jewellery demand.",
    ISR: "Ramat Gan, historically the centre for larger, higher-value polished stones.",
    USA: "The largest consumer market in the world, and a substantial re-exporter.",
    BWA: "The mining success story: diamond revenue took Botswana from one of the poorest countries at independence to middle income.",
    RUS: "Alrosa produces roughly a third of the world’s rough by volume; G7 sanctions since 2024 have complicated every step of the chain.",
    ZAF: "Where the modern industry began, at Kimberley in the 1870s.",
    CAN: "Arctic mines opened in the 1990s, marketed hard on ethical provenance.",
    NAM: "Unusually, much of it dredged from the seabed off the Atlantic coast.",
    LSO: "A tiny mountain kingdom that produces an outsized number of very large stones.",
    COD: "High volume, low value — mostly industrial-grade stones.",
    AUS: "The Argyle mine, source of most of the world’s pink diamonds, closed in 2020.",
    THA: "A major cutting and jewellery-setting centre."
  }
},
{
  id: "copper", name: "Copper", emoji: "🟠",
  hs: "HS 2603 + 7403", unit: "ore + refined metal", color: "#cf6a3c",
  blurb: "Every electric motor, transformer and power cable needs it, which makes copper the metal most tightly coupled to electrification. The Andes and the Central African Copperbelt hold most of the accessible supply — and, awkwardly for everyone else, both are a long way from where the smelters are.",
  hubs: ["JPN","DEU"],
  notes: {
    CHL: "Around a quarter of world supply. Copper is roughly half of everything Chile exports, and state-owned Codelco is the largest producer on earth.",
    PER: "The second-largest producer; mining conflicts with Andean communities regularly close roads and mines.",
    COD: "The fastest-growing major producer, and the world’s dominant cobalt source alongside it.",
    IDN: "Now bans raw ore exports outright to force smelting to happen domestically.",
    ZMB: "The other half of the Copperbelt, and the country’s overwhelming export earner.",
    JPN: "Imports ore, smelts it, exports refined metal. Almost no copper is mined in Japan.",
    POL: "KGHM works one of the largest underground copper deposits in the world, in Lower Silesia.",
    MNG: "Oyu Tolgoi is so large that its output measurably moves Mongolian GDP."
  }
},
{
  id: "batteries", name: "Lithium-ion Batteries", emoji: "🔋",
  hs: "HS 850760", unit: "cells + packs", color: "#a3e635",
  blurb: "The youngest market on this map and the fastest-growing: exports have roughly quadrupled since 2018. China holds well over half of it, and the European entries are almost entirely Asian-owned gigafactories placed close to German car plants.",
  hubs: ["NLD","SGP"],
  notes: {
    CHN: "Over half of world exports, and a far larger share of the cathode, anode and refining steps upstream of the cell.",
    KOR: "LG Energy Solution, Samsung SDI and SK On — the main non-Chinese alternative at scale.",
    POL: "LG’s Wrocław plant is the largest battery factory in Europe, and batteries are now a top Polish export.",
    HUN: "Samsung SDI at Göd and a very large CATL plant under construction at Debrecen.",
    JPN: "Invented the commercial lithium-ion cell in 1991 and has steadily lost share since.",
    SWE: "Northvolt was Europe’s attempt at a home-grown champion; its 2024 collapse reset those ambitions."
  }
},
{
  id: "apparel", name: "Clothing", emoji: "👕",
  hs: "HS 61 + 62", unit: "knitted + woven garments", color: "#c964d6",
  blurb: "Garment making is the classic first rung of industrialisation — low capital, high labour — so the map moves as wages rise. It went Britain, then Japan, then Korea and Taiwan, then China; it is now moving to Bangladesh, Vietnam and Cambodia, where clothing can be over 80% of all exports.",
  hubs: ["DEU","NLD","ESP","HKG","BEL","GBR"],
  notes: {
    CHN: "Still roughly a third of world exports, though its share has been falling for a decade as costs rise.",
    BGD: "Clothing is over 80% of everything Bangladesh exports — the highest dependence on a single sector of any large economy.",
    VNM: "The main beneficiary of manufacturers diversifying away from China.",
    ITA: "The luxury end. Italy exports a fraction of China’s volume at many times the price per garment.",
    DEU: "Mostly a logistics and re-export role for the EU market.",
    TUR: "Close enough to Europe to restock in days rather than weeks — the fast fashion advantage.",
    ESP: "Inditex — Zara’s parent — is headquartered in Galicia and routes a large share of its stock through Spain.",
    KHM: "Around two-thirds of Cambodian exports.",
    PAK: "Unusually, an integrated industry — Pakistan grows its own cotton, spins it and sews it.",
    PRT: "Europe’s quality knitwear base, and increasingly a near-shoring destination.",
    LKA: "Specialises in technical sportswear and lingerie rather than basics.",
    ETH: "A state push to build a garment industry, slowed sharply by the Tigray conflict and the loss of duty-free US access."
  }
},
{
  id: "flowers", name: "Cut Flowers", emoji: "🌷",
  hs: "HS 0603", unit: "fresh cut", color: "#ff6fa5",
  blurb: "A market built on aviation. Roses are grown on the equator — Kenya, Ethiopia, Ecuador and Colombia, where the light is strong and the altitude keeps the nights cool — then flown to Amsterdam, auctioned within hours, and trucked across Europe. Almost half of world exports pass through one Dutch auction house.",
  caveat: "Nigeria's $157m is almost certainly a filing error rather than a flower industry — it appears in no other account of this trade. It is left in because these figures are reproduced as reported, not cleaned by hand.",
  hubs: ["NLD","DEU","GBR","BEL"],
  notes: {
    NLD: "Royal FloraHolland in Aalsmeer is the largest flower auction on earth, in one of the largest buildings on earth. Much of what it sells was grown in Africa that week.",
    COL: "Supplies most of the flowers Americans buy, especially the enormous Valentine’s Day peak.",
    ECU: "Equatorial light and 2,800m altitude give Ecuadorian roses unusually large heads and long stems.",
    KEN: "Grown around Lake Naivasha and flown out overnight — flowers are one of Kenya’s top export earners.",
    ETH: "A deliberate state-backed industry, built from scratch in about twenty years.",
    CHN: "Yunnan supplies most of Asia, through the Kunming auction market.",
    THA: "The orchid specialist.",
    ISR: "The country that pioneered the airfreight flower model in the 1970s."
  }
}
];
