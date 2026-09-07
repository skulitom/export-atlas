// Export Atlas - markets, part 3 of 4. See markets-a.js for the header.

module.exports = [
{
  id: "chocolate", name: "Chocolate", emoji: "🍫",
  hs: "HS 1806", unit: "cocoa preparations", color: "#cf9a6a", group: "Food & drink",
  blurb: "Put this map next to the cocoa bean map and the argument about commodity dependence is made without a word. Beans are a $9bn trade that West Africa dominates. Chocolate is a $37bn trade that Europe dominates. Germany alone sells more chocolate than Côte d'Ivoire and Ghana sell beans between them.",
  hubs: ["NLD"],
  notes: {
    DEU: "Europe's confectionery factory, and the single largest exporter of chocolate in the world — from a country that cannot grow a cocoa tree.",
    BEL: "The praline was invented in Brussels in 1912. Belgian chocolate is a protected quality standard as much as a place of origin.",
    ITA: "Ferrero — Nutella, Kinder and Rocher — is one of the largest confectionery companies on earth and privately held.",
    POL: "The fastest-growing manufacturing base in the EU for chocolate, on lower costs than the west of the union.",
    NLD: "Amsterdam grinds the beans; the Netherlands then sells both the cocoa butter and the finished bars.",
    CHE: "Invented milk chocolate and conching, and still commands the highest price per kilo of any large exporter.",
    CIV: "Grows more cocoa than any other country and barely registers on this map. That gap is the whole point of putting the two side by side.",
    CAN: "A large exporter almost entirely because of proximity to the United States.",
    TUR: "Built a serious confectionery export industry aimed at the Middle East and Central Asia.",
    MEX: "Where chocolate was first drunk, several thousand years before Europe had heard of it."
  }
},
{
  id: "soy", name: "Soybeans", emoji: "🫛",
  hs: "HS 1201", unit: "beans", color: "#8fb84a", group: "Agriculture",
  blurb: "One crop, two sellers and essentially one buyer: China takes around 60% of the soybeans that cross a border, and most of them are fed to pigs. The 2018 tariff war rerouted that flow almost overnight, and Brazil has not given the share back.",
  hubs: [],
  notes: {
    BRA: "Overtook the United States in 2013 and has widened the lead every year since. The Cerrado savanna was made farmable by soil science in the 1970s, and it is now the largest soy region on earth.",
    USA: "The Midwest crop was built around Chinese demand. When Beijing put tariffs on it in 2018, exports fell by roughly half in a season.",
    PRY: "Landlocked, and ships almost everything down the Paraná river on barges — the level of that river is a national economic variable.",
    ARG: "Exports far more soy meal and oil than beans: a deliberately tiered export tax pushes the crop into domestic crushing plants first.",
    URY: "A very high share of the crop is exported — the domestic market is tiny.",
    CAN: "Non-GM identity-preserved beans for the Japanese tofu and miso market, sold at a premium.",
    UKR: "Sunflower is the bigger crop, but soy exports survived the war through the Danube ports."
  }
},
{
  id: "beef", name: "Beef", emoji: "🥩",
  hs: "HS 0201 + 0202", unit: "fresh + frozen", color: "#b03a4a", group: "Food & drink",
  blurb: "Brazil sells more beef than anyone and has grown fastest, on pasture, at a scale that keeps pressing against the edge of the Amazon. India ranks improbably high for a country that reveres cattle: its exports are buffalo — carabeef — which the restrictions do not cover.",
  hubs: ["NLD"],
  notes: {
    BRA: "The largest exporter in the world, though by value Brazil, the United States and Australia are within a few points of each other. Cattle ranching is the largest single driver of Amazon deforestation, which is why EU deforestation rules land hardest here.",
    USA: "Exports high-value cuts to Japan and Korea while importing lean trimmings to mix into hamburger. The same country is a top-five exporter and a top-five importer.",
    AUS: "Herd numbers swing with drought on a multi-year cycle, and the export figure swings with them.",
    IND: "Almost entirely water buffalo, sold to Vietnam, Malaysia and Egypt. Slaughter of cattle proper is restricted or banned across most states.",
    ARG: "The classic beef nation, held back for decades by export bans and quotas imposed to keep domestic steak cheap.",
    NLD: "A processing and re-export hub for the EU rather than a cattle country.",
    IRL: "Grass-fed year round, and more beef is exported than eaten — the domestic market is far too small.",
    NZL: "Mostly lean manufacturing beef, a by-product of the dairy herd, sold into the American burger trade.",
    URY: "Every animal in the country is individually tagged and traceable, which is what opens the premium markets.",
    POL: "The EU's fastest-growing beef exporter, on low costs."
  }
},
{
  id: "cheese", name: "Cheese", emoji: "🧀",
  hs: "HS 0406", unit: "all cheeses", color: "#f2cb55", group: "Food & drink",
  blurb: "A European market almost end to end: five of the top six exporters are EU members and the sixth is the United States. This is also the one food trade where the name is the asset — protected-origin rules mean Parmigiano Reggiano and Roquefort can legally be made in one place and nowhere else, which is why Italy and France earn far more per kilo than the bulk producers.",
  hubs: ["NLD", "DEU"],
  notes: {
    DEU: "The largest exporter by volume, and most of it is commodity gouda and mozzarella rather than anything with a protected name.",
    NLD: "Gouda and Edam, sold through a co-operative structure that has organised Dutch dairy for over a century.",
    ITA: "Parmigiano Reggiano and Grana Padano are protected designations with consortium-controlled production — and the highest price per kilo in the trade.",
    FRA: "Around 1,200 recognised varieties, some 50 of them with protected origin status.",
    NZL: "Fonterra collects nearly all of New Zealand's milk and is one of the largest dairy exporters in the world, shipping to Asia from the far side of the planet.",
    DNK: "Feta, oddly — Danish producers fought and lost a long EU case over the name, and now sell it outside Europe.",
    IRL: "Cheddar, historically almost all of it to Britain, which made Brexit an unusually specific problem.",
    USA: "Wisconsin and California; exports have grown fast on Mexican and Asian demand.",
    POL: "A large low-cost supplier to the rest of the EU.",
    BLR: "Belarus supplies Russia, which is why almost none of this shows up in EU statistics."
  }
},
{
  id: "sugar", name: "Sugar", emoji: "🍬",
  hs: "HS 1701", unit: "cane + beet", color: "#d8b06a", group: "Agriculture",
  blurb: "Brazil alone accounts for roughly two fifths of the sugar that crosses a border, and its mills can switch between making sugar and making ethanol depending on which pays better that month. The world sugar price is therefore partly a function of the price of petrol in São Paulo.",
  hubs: ["ARE", "NLD"],
  notes: {
    BRA: "Mills switch between sugar and ethanol week to week. No other agricultural producer has that kind of optionality over its own output.",
    IND: "The largest producer in the world in some years, and an unpredictable exporter: New Delhi restricts shipments whenever domestic prices rise.",
    THA: "Long the number two exporter, though drought and a shift to cassava have cut the crop.",
    AUS: "Queensland cane, almost all of it exported raw to refineries in Asia.",
    GTM: "The most efficient cane producer in the Americas after Brazil.",
    FRA: "Beet sugar. The EU abolished its production quotas in 2017 and European exports jumped.",
    ARE: "Al Khaleej in Dubai is one of the largest standalone refineries anywhere, importing raw sugar and selling it on refined.",
    MEX: "Sells into a US market whose sugar imports are governed by a bilateral agreement rather than the open market."
  }
},
{
  id: "olive", name: "Olive Oil", emoji: "🫒",
  hs: "HS 1509", unit: "virgin + refined", color: "#8a9a3b", group: "Agriculture",
  blurb: "The most geographically confined market here — essentially one climate band around the Mediterranean, and Spain presses close to half of it and sells a bit over a third of the exports. The droughts of 2022 and 2023 roughly doubled the price, which is why this market's value rose in a year when its volume fell.",
  hubs: ["ITA"],
  notes: {
    ESP: "Andalusia, and the province of Jaén alone has more olive trees than most countries have of anything. Two bad harvests in a row emptied world stocks.",
    ITA: "Both a producer and a hub: Italy imports Spanish and Tunisian oil in bulk, bottles it, and sells it on at a considerable premium.",
    GRC: "The highest olive oil consumption per head in the world, which leaves proportionally less to export.",
    TUN: "The largest producer outside the EU, selling mostly in bulk to Italian and Spanish bottlers rather than under its own name.",
    PRT: "The fastest-growing producer in Europe, on intensive hedge-planted groves.",
    TUR: "Alternates between exporting freely and banning bulk exports to hold down domestic prices.",
    MAR: "Production has been repeatedly cut by drought, turning an exporter into an occasional importer."
  }
},
{
  id: "spirits", name: "Spirits", emoji: "🥃",
  hs: "HS 2208", unit: "distilled drinks", color: "#b8762e", group: "Food & drink",
  blurb: "Distilled drink is a geography of protected names. Scotch can only be Scotch if it comes from Scotland, cognac from Cognac, tequila from designated Mexican states. Those legal fences are why three countries take nearly half of a $41bn market — and why Mexico's number has tripled in a decade on one plant.",
  hubs: ["SGP", "NLD"],
  notes: {
    GBR: "Scotch whisky is the single largest food and drink export the United Kingdom has, and it is most of this figure.",
    FRA: "Cognac and armagnac. A slow year in China or the United States moves the whole national number.",
    MEX: "Tequila and mezcal can legally be made only in designated Mexican states. American demand has tripled exports in a decade.",
    SGP: "A duty-free re-export hub for spirits moving into Asia, distilling essentially none of it.",
    USA: "Bourbon, which by law must be made in the United States — and which the EU targeted with retaliatory tariffs in 2018.",
    IRL: "Irish whiskey was down to two working distilleries in 1980. It is now the fastest-growing whiskey category in the world.",
    ITA: "Aperitifs and grappa; the Aperol and Campari boom is visible in this line.",
    SWE: "Essentially one brand, Absolut, all of it distilled in a single town in Skåne.",
    NLD: "Genever, vodka and a large blending and bottling trade.",
    DEU: "A blending and re-export role more than a distilling one."
  }
},
{
  id: "maize", name: "Maize", emoji: "🌽",
  hs: "HS 1005", unit: "corn", color: "#f7c545", group: "Agriculture",
  blurb: "Most of the world's maize never crosses a border — it is eaten by livestock in the country that grew it, or burned as ethanol. The slice that does move belongs to the Americas, with Ukraine as the wild card: its harvest feeds a large share of Europe's animals, and it has to cross the Black Sea to get there.",
  hubs: [],
  notes: {
    USA: "The Corn Belt grows more maize than any country on earth, and sends roughly a third of it to ethanol distilleries rather than to food or export.",
    BRA: "The safrinha — a second maize crop planted on the same land right after the soybeans come off — turned Brazil into a top exporter in about fifteen years.",
    ARG: "A major exporter despite years of export taxes and quotas intended to keep domestic food cheap.",
    UKR: "Maize is Ukraine's largest agricultural export by value, and it has to leave through Black Sea ports or Danube barges.",
    FRA: "The EU's biggest producer, though irrigation restrictions in dry summers now cap the crop.",
    ZAF: "White maize is the staple food of southern Africa, and South Africa is the region's supplier of last resort in a drought.",
    HUN: "One of the few EU members that consistently exports more grain than it eats.",
    ROU: "Constanța gives Romania the Black Sea outlet that its landlocked neighbours lack."
  }
},
{
  id: "cotton", name: "Cotton", emoji: "🧵",
  hs: "HS 5201", unit: "raw fibre", color: "#e2e8f0", group: "Agriculture",
  blurb: "Put this beside the clothing map and they are close to mirror images: cotton is grown in the Americas, Australia and West Africa, and sewn in Asia. For Benin, Mali and Burkina Faso it is the single largest export — a trade structure that has not fundamentally changed since colonial rule.",
  hubs: [],
  notes: {
    BRA: "A net importer within living memory, and now a close second on the scale and yields of Mato Grosso. Brazil passed the United States on volume in the 2023/24 season, though not yet on value.",
    USA: "The dominant exporter for most of the last century. American cotton subsidies have been contested at the WTO by West African growers for over twenty years.",
    AUS: "Irrigated cotton in New South Wales. Output tracks the water in the Murray-Darling and can fall by 90% in a drought.",
    GRC: "The European Union's only cotton grower of any size.",
    BEN: "Cotton is roughly three-quarters of everything Benin sells abroad — about as concentrated as a national export base gets.",
    MLI: "Africa's largest producer in a good year, and the crop that most of the rural south depends on.",
    BFA: "Grown by hundreds of thousands of smallholders; the crop collapsed and recovered over the GM cotton dispute of the 2010s.",
    CIV: "Cotton in the north, cocoa in the south — two entirely separate export economies in one country.",
    TUR: "Both a large grower and a large importer, because its own spinning mills consume more than it can plant.",
    UZB: "Stopped exporting raw cotton almost entirely, choosing to spin and sew it at home instead — a deliberate move up the chain.",
    EGY: "Extra-long staple cotton. The name is used on far more fabric worldwide than Egypt could possibly grow."
  }
},
{
  id: "refined", name: "Refined Petroleum", emoji: "⛽",
  hs: "HS 2710", unit: "fuels + oils", color: "#f28b52", group: "Energy",
  blurb: "Almost as large as the crude oil trade itself, and shaped completely differently. Refining is a manufacturing business, so this map shows where the refineries are rather than where the oil is: India, Singapore, South Korea and the Netherlands all rank high on crude they had to buy from somebody else first.",
  hubs: ["NLD", "SGP", "BEL"],
  notes: {
    USA: "The Gulf Coast refining complex is the largest concentration of refining capacity in the world, and the US exports more fuel than any other country.",
    RUS: "Sanctions capped the price of Russian diesel and fuel oil rather than the volume, and the barrels found new buyers.",
    IND: "Jamnagar is the largest single refinery on earth. India bought heavily discounted Russian crude and sold the refined products onward, including to Europe.",
    NLD: "Rotterdam is Europe's refining and blending hub — crude in, diesel and gasoline out, almost none of it Dutch oil.",
    SGP: "Jurong Island refines for the whole region. Singapore has no oil of its own and refining is one of its largest industries.",
    KOR: "Four very large refineries built to run on imported Middle Eastern crude and export the products.",
    SAU: "Increasingly sells refined products rather than crude — the same barrel, worth more.",
    ARE: "Ruwais, plus a large fuel-blending and bunkering trade out of Fujairah.",
    BEL: "Antwerp, the second petrochemical cluster of northwest Europe after Rotterdam."
  }
}
];
