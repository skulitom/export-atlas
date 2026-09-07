// Export Atlas - markets, part 7 of 7. See markets-a.js for the header.

module.exports = [
{
  id: "sunflower", name: "Sunflower Oil", emoji: "🌻",
  hs: "HS 1512", unit: "sunflower + safflower oil", color: "#f2b705", group: "Agriculture",
  blurb: "Ukraine and Russia between them supply most of the world's sunflower oil, which is why one blockaded sea turned into a cooking-oil crisis across three continents in 2022. Sunflower is the everyday frying oil of the Middle East, North Africa and South Asia, and every substitute — palm, soy, rapeseed — rose with it.",
  hubs: ["NLD", "TUR"],
  notes: {
    UKR: "The largest exporter in the world. The 2022 blockade emptied shelves from Cairo to Jakarta, and the grain corridor negotiated afterwards was about oil as much as wheat.",
    RUS: "Expanded hard while Ukraine's ports were closed and has held much of the share since.",
    ARG: "The third significant producer, and the one that supplies the Americas.",
    TUR: "Crushes imported seed and re-exports the oil — a processing role rather than a growing one.",
    NLD: "Rotterdam refines and blends vegetable oils it does not grow.",
    HUN: "The EU's largest producer, on the Great Plain.",
    ROU: "Alongside Bulgaria, the other Black Sea supplier that gained when Ukraine's exports faltered.",
    BGR: "A large grower for its size, and a Danube export route.",
    ESP: "Andalusian sunflower, and a crushing industry serving the western Mediterranean.",
    MDA: "One of the few economies where sunflower is a top-three export."
  }
},
{
  id: "nuts", name: "Nuts", emoji: "🥜",
  hs: "HS 0801 + 0802", unit: "edible nuts", color: "#a9784f", group: "Agriculture",
  blurb: "Almonds, cashews, walnuts, pistachios and Brazil nuts in one heading — a food market that has grown faster than almost any other, on snacking and plant-based milk. California grows most of the world's almonds using a large share of the state's agricultural water, which has made the crop a proxy for every argument about Western drought.",
  hubs: ["NLD", "VNM"],
  notes: {
    USA: "California almonds, walnuts and pistachios. The almond crop alone drinks a significant fraction of the state's irrigation water, which is why it is argued about every drought year.",
    VNM: "Shells most of the world's cashews, importing raw nuts from West Africa to do it — the value is in the processing, not the tree.",
    TUR: "Hazelnuts. Turkey grows roughly two thirds of the world crop, so the price of chocolate spread starts on the Black Sea coast.",
    IRN: "Pistachios, and the place the crop comes from. Sanctions have handed much of the market to California.",
    CIV: "The largest grower of raw cashews on earth, most of which leave the country unshelled to be processed in Asia.",
    NLD: "Europe's nut trading and repackaging centre.",
    IND: "A very large cashew processor and an even larger consumer.",
    CHL: "Walnuts and almonds counter-seasonal to California.",
    AUS: "The southern hemisphere's almond industry, on the same Murray-Darling water as its cotton.",
    BRA: "Brazil nuts, which cannot be farmed — they only fruit in intact rainforest, which makes the crop an argument for leaving it standing.",
    DEU: "Processing and confectionery demand rather than growing."
  }
},
{
  id: "citrus", name: "Citrus", emoji: "🍊",
  hs: "HS 0805", unit: "oranges, lemons, mandarins", color: "#ffa62b", group: "Agriculture",
  blurb: "The most planted fruit tree on earth, traded across a Mediterranean winter and a Southern Hemisphere summer so that the shelves never empty. It is also being reshaped by a bacterial disease: citrus greening has cut Florida's orange crop by more than 90% since 2005, and there is still no cure.",
  hubs: ["NLD"],
  notes: {
    ESP: "Europe's citrus garden. Valencia and Andalusia supply most of the EU through the winter.",
    ZAF: "The largest Southern Hemisphere exporter, filling the northern summer gap, and in a long-running dispute with the EU over cold treatment rules.",
    TUR: "Mandarins and lemons, sold mostly into Russia and Eastern Europe.",
    EGY: "The fastest-growing large exporter in the world, on cheap land, Nile water and a devalued currency.",
    MAR: "Easy-peel mandarins developed specifically for European supermarkets.",
    CHN: "The largest producer on earth by a wide margin, and it eats nearly all of it.",
    USA: "California carries the industry now. Florida's orange groves have been devastated by citrus greening.",
    NLD: "Ripening and distribution for northern Europe.",
    ARG: "Lemons above all — Tucumán is one of the largest lemon-growing regions anywhere.",
    PER: "Mandarins counter-seasonal to Spain.",
    GRC: "Oranges for juicing more than for the table."
  }
},
{
  id: "barley", name: "Barley", emoji: "🌿",
  hs: "HS 1003", unit: "malting + feed grain", color: "#c4b169", group: "Agriculture",
  blurb: "The world's fourth grain, grown where wheat struggles, and traded for two unrelated reasons: malting barley for beer and whisky, and feed barley for livestock. China buys most of the feed — which is why an 80% Chinese tariff on Australian barley in 2020, lifted only in 2024, reorganised the whole market for four years.",
  hubs: [],
  notes: {
    FRA: "Europe's largest exporter, and the main supplier of malting barley to the world's brewers.",
    AUS: "China's 2020 tariff removed its largest market overnight — and Australia stayed the world's largest exporter anyway, redirecting the crop to Saudi Arabia, Mexico and Japan. The Chinese trade has not fully returned even now the tariff has gone.",
    RUS: "A large feed barley exporter into the Middle East and North Africa.",
    UKR: "Barley exports collapsed with the ports in 2022 and have only partly recovered.",
    ARG: "Grew its malting industry deliberately, on the back of Brazilian brewing demand.",
    CAN: "Malting barley for Asia, and the feed that supports its own cattle industry.",
    DEU: "Malting barley and a domestic brewing industry that consumes a great deal of it.",
    DNK: "A very large exporter for its size, mostly as feed into Germany and the Netherlands.",
    GBR: "Scottish malting barley underpins the whisky market shown elsewhere on this map.",
    KAZ: "The Central Asian supplier, selling into Iran and China.",
    ROU: "Black Sea barley, shipped through Constanța."
  }
},
{
  id: "lamb", name: "Lamb & Mutton", emoji: "🐏",
  hs: "HS 0204", unit: "sheep + goat meat", color: "#a85a68", group: "Food & drink",
  blurb: "A small market with an extreme geography: two countries in the far South Pacific supply most of the sheep meat that crosses a border, and ship it to Europe, China and the Gulf. New Zealand has several times more sheep than people, and lamb is one of the few meats marketed on pasture rather than breed.",
  hubs: ["NLD"],
  notes: {
    NZL: "Sheep outnumber people several times over, and almost the entire crop is exported — the domestic market could never absorb it.",
    AUS: "Overtook New Zealand on volume as its flock grew and New Zealand's shrank in favour of dairy.",
    GBR: "British lamb goes to France while British supermarkets sell New Zealand lamb — a trade that survives entirely on seasonality and price.",
    IRL: "Grass-fed, and heavily dependent on the French and British markets.",
    ESP: "Sells live animals and carcasses into North Africa and the Middle East.",
    NLD: "Slaughter and re-export rather than farming.",
    URY: "Wool and lamb from the same flock, sold into Brazil and Europe.",
    ETH: "One of the largest sheep and goat populations in the world, exporting into the Gulf.",
    IND: "Goat meat rather than lamb, sold almost entirely to the Middle East.",
    CHN: "The largest producer and the largest importer at once."
  }
},
{
  id: "butter", name: "Butter", emoji: "🧈",
  hs: "HS 0405", unit: "butter + dairy fat", color: "#ffe08a", group: "Food & drink",
  blurb: "Butter came back. Written off for forty years as the unhealthy option, it recovered as nutritional advice turned against margarine, and the price has been volatile ever since in ways dairy farmers find impossible to plan around. New Zealand leads and Ireland is close behind, both running cows on grass year-round and exporting nearly everything they milk — with the Dutch trading operation sitting between them, churning rather less than it sells.",
  hubs: ["NLD", "BEL"],
  notes: {
    NZL: "Fonterra collects almost all of New Zealand's milk, and the country exports the overwhelming majority of what it produces.",
    IRL: "Kerrygold is one of very few butter brands with genuine international recognition, and it is a farmer-owned co-operative.",
    NLD: "Trading and repackaging as much as churning.",
    BEL: "Processing and re-export into the rest of the EU.",
    FRA: "A domestic butter culture large enough that France is a major producer and still imports in a shortage — as it did in 2017, when supermarkets ran out.",
    DEU: "Europe's largest milk producer, and a swing exporter depending on the price.",
    USA: "Exports have grown quickly, though Americans still eat most of what the country churns.",
    DNK: "Lurpak, and a co-operative structure that has organised Danish dairy for over a century.",
    POL: "A fast-growing low-cost supplier to the rest of Europe.",
    BLR: "Supplies Russia, which is why almost none of it appears in EU statistics."
  }
},
{
  id: "formula", name: "Infant Formula", emoji: "🍼",
  hs: "HS 1901.10", unit: "preparations for infant use", color: "#cfe3f0", group: "Food & drink",
  blurb: "A market shaped almost entirely by trust. Chinese confidence in domestic brands collapsed after the 2008 melamine scandal, which killed six infants and sickened three hundred thousand, and never fully returned — which is why the Netherlands, Ireland and New Zealand ship formula halfway around the world to a country with an enormous dairy industry of its own.",
  hubs: ["NLD", "SGP"],
  notes: {
    NLD: "The largest exporter in the world, and the destination of a great deal of the Chinese buying that followed 2008.",
    IRL: "A very large share of the world's infant formula is made in Ireland, mostly by three multinationals.",
    NZL: "Grass-fed dairy sold on exactly the provenance story the 2008 scandal created demand for.",
    DEU: "European brands with strong recognition in Asia, sometimes bought out of German supermarkets by personal shoppers.",
    FRA: "A major producer, and the source of a salmonella recall in 2017 that spanned 80 countries.",
    AUS: "The daigou trade — personal shoppers buying Australian tins for Chinese buyers — grew large enough that supermarkets imposed purchase limits.",
    SGP: "A regional manufacturing and distribution base for several of the majors.",
    DNK: "Arla, and a co-operative supply chain marketed on traceability.",
    USA: "The 2022 shortage, after a single plant shut down, exposed how concentrated American production had become.",
    CHE: "Nestlé's home market, and the origin of the product itself."
  }
},
{
  id: "biofuel", name: "Biofuels", emoji: "🧪",
  hs: "HS 2207 + 3826", unit: "ethanol + biodiesel", color: "#8fd14f", group: "Energy",
  blurb: "Ethanol and biodiesel — crops burned in engines, which puts this market in direct competition with the food maps elsewhere in the atlas. The United States turns roughly a third of its maize crop into ethanol and Brazil has run cars on sugarcane alcohol since the 1970s oil shocks — but the trade map is led by Rotterdam, which blends and re-exports fuel made almost entirely somewhere else.",
  hubs: ["NLD", "BEL"],
  notes: {
    USA: "About a third of the American maize crop goes to ethanol distilleries — a market created and sustained by the Renewable Fuel Standard rather than by demand.",
    BRA: "Flex-fuel cars have been standard since 2003, and drivers choose between petrol and cane ethanol at the pump on price alone.",
    NLD: "Rotterdam blends and re-exports; almost none of it is made in the Netherlands.",
    DEU: "Rapeseed biodiesel, and the EU blending mandates that guarantee it a market.",
    ESP: "Biodiesel from imported feedstock, and a persistent argument about how much of it is really used cooking oil.",
    FRA: "Beet and wheat ethanol, and one of Europe's largest producers.",
    PAK: "Molasses ethanol, a by-product of the sugar industry and a significant export earner.",
    IDN: "Palm-based biodiesel, mandated domestically at a blend rate high enough to move the world palm oil price.",
    ARG: "Soy biodiesel, and a long trade dispute with the EU over subsidy.",
    HUN: "Maize ethanol at one of Europe's largest single plants.",
    BEL: "Blending and transit for the northwest European market."
  }
},
{
  id: "silver", name: "Silver", emoji: "🥈",
  hs: "HS 7106", unit: "unwrought + semi-manufactured", color: "#cdd6de", group: "Minerals & materials",
  blurb: "Half industrial metal and half store of value, and increasingly the former: solar panels use silver paste for their contacts, and that single application now consumes more silver than photography ever did. As with gold, the map shows vaults and refineries at least as much as mines.",
  hubs: ["GBR", "CHE", "HKG"],
  notes: {
    GBR: "London vaulting and clearing, on the same model as its gold business.",
    USA: "A large refiner, fabricator and investment market.",
    MEX: "The largest producer in the world for well over a century, mostly as a by-product of lead and zinc mining.",
    DEU: "Industrial fabrication — contacts, brazing alloys and photovoltaic paste.",
    CHE: "Refining and vaulting alongside the gold trade.",
    HKG: "The route into Chinese industrial and investment demand.",
    POL: "KGHM produces silver as a by-product of copper, at a scale that makes Poland a top-five producer without a silver mine.",
    PER: "One of the largest primary producers, from the central Andes.",
    CAN: "By-product silver from base metal mines, plus a large minting business.",
    KOR: "Industrial demand for electronics, and refining to match.",
    JPN: "Electronics and solar paste manufacturing.",
    AUS: "By-product output from Cannington, one of the largest silver-lead mines anywhere."
  }
},
{
  id: "lithium", name: "Lithium", emoji: "🧂",
  hs: "HS 2836.91", unit: "lithium carbonate", color: "#9fe8d8", group: "Minerals & materials",
  blurb: "The battery map's upstream. Lithium carbonate comes either from hard rock or from brine pumped out of Andean salt flats and evaporated by the sun for more than a year. The price rose roughly tenfold between 2020 and 2022 and then gave almost all of it back, which is the whole difficulty of investing in this market.",
  caveat: "Australia mines more lithium than any other country but ships it as spodumene concentrate, a different customs heading, so it does not appear on this map. What is shown here is the refined carbonate — a step Australia has only just begun to take at home.",
  hubs: [],
  notes: {
    CHL: "The Salar de Atacama. Brine is pumped into ponds and left to evaporate for over a year in the driest desert on earth, which is why supply cannot respond quickly to price.",
    CHN: "Refines far more than it mines, converting Australian spodumene into battery-grade chemicals — the step that actually confers control.",
    ARG: "The third corner of the lithium triangle, and the slowest to develop, though that has changed sharply since 2022.",
    USA: "One producing brine operation in Nevada and a great deal of announced capacity.",
    KOR: "Refining to feed its own cell manufacturers.",
    BEL: "Chemical processing and distribution into the European battery industry.",
    RUS: "A small producer, and an importer of the carbonate its own industry needs.",
    DEU: "Chemical conversion rather than extraction, close to the gigafactories.",
    JPN: "Long-established lithium chemistry for the cathode industry.",
    ZWE: "Africa's first significant producer, developed almost entirely with Chinese investment."
  }
},
{
  id: "graphite", name: "Graphite", emoji: "✏️",
  hs: "HS 2504", unit: "natural graphite", color: "#4a5058", group: "Minerals & materials",
  blurb: "The other half of a lithium-ion battery, and the half nobody talks about: every cell needs an anode, and almost every anode is graphite. China supplies most of the natural graphite and effectively all of the processing that turns it into anode material — and put it under export licensing in 2023.",
  caveat: "Natural graphite only. Synthetic graphite, which is made from petroleum coke and now supplies a large share of battery anodes, is traded under a different heading and is not counted here.",
  hubs: [],
  notes: {
    CHN: "Most of the mining and nearly all of the anode-grade processing. Adding it to the export control list in 2023 was a far bigger lever than the rare earth controls that got more attention.",
    MOZ: "Balama is among the largest graphite mines in the world, developed specifically for the battery market.",
    MDG: "A long-established producer of high-purity flake graphite, mined since the colonial period.",
    BRA: "One of the few significant producers in the Americas.",
    NOR: "Skaland produces some of the highest-grade flake graphite anywhere.",
    UKR: "Substantial deposits, and an industry the war has largely halted.",
    IND: "A large producer of the amorphous graphite used in refractories rather than batteries.",
    CAN: "Several projects aimed squarely at the North American battery supply chain.",
    TZA: "Large deposits and repeated difficulty getting projects financed.",
    DEU: "Processing and refractory manufacturing rather than mining."
  }
},
{
  id: "cement", name: "Cement", emoji: "🧱",
  hs: "HS 2523", unit: "cement + clinker", color: "#b8b3a8", group: "Minerals & materials",
  blurb: "The second most consumed substance on earth after water, and almost never traded far: it is cheap, heavy and perishable, so it moves by sea only where the arithmetic works. That makes this a map of coastal surplus capacity rather than of construction — Turkey and Vietnam built more kilns than their own building booms turned out to need.",
  hubs: [],
  notes: {
    TUR: "Europe's largest producer, exporting the surplus left over when its domestic construction boom cooled.",
    VNM: "Built enormous capacity through the 2010s and now exports the overhang, mostly around Southeast Asia.",
    CHN: "Makes over half the world's cement and exports very little of it — that ratio is the clearest possible statement of how local this trade is.",
    THA: "A regional supplier with an unusually export-oriented industry.",
    ARE: "Gulf capacity built for a construction boom, selling into East Africa and South Asia between projects.",
    JPN: "A shrinking domestic market and a persistent export surplus.",
    KOR: "Sells into Southeast Asia and, historically, into China.",
    IRN: "One of the largest producers in the world, exporting into Iraq, Afghanistan and Central Asia.",
    ESP: "Never recovered its pre-2008 domestic demand, and has exported the difference ever since.",
    DEU: "Clinker and specialty cements, and an industry facing an unusually hard decarbonisation problem.",
    PAK: "Exports into Afghanistan and by sea to East Africa.",
    IDN: "Overbuilt capacity now looking for buyers abroad."
  }
},
{
  id: "robots", name: "Industrial Robots", emoji: "🤖",
  hs: "HS 8479.50", unit: "industrial robots n.e.s.", color: "#ff7b54", group: "Technology",
  blurb: "Japan and Germany build most of the world's industrial robots and China buys most of them — it now installs more each year than the rest of the world combined, and has gone from a negligible manufacturer to a serious one inside a decade. Robot density per worker, though, is highest in South Korea by a wide margin.",
  hubs: ["NLD", "SGP"],
  notes: {
    JPN: "Fanuc, Yaskawa and Kawasaki. Japan has led robot manufacturing since the industry began and still supplies much of the world's servo and controller technology.",
    DEU: "KUKA, bought by a Chinese appliance maker in 2016 in a deal that permanently changed German attitudes to foreign industrial investment.",
    CHN: "Installs more industrial robots each year than every other country put together, and increasingly builds them rather than importing them.",
    ITA: "Packaging, food and ceramics automation — a specialism rather than general-purpose arms.",
    USA: "Strong in systems integration and automotive automation, weaker in building the arms themselves.",
    KOR: "The highest robot density per manufacturing worker in the world, by a considerable margin.",
    CHE: "ABB, one of the four companies that dominate general-purpose industrial robotics.",
    SWE: "The other half of ABB's heritage, and a deep automation engineering base.",
    FRA: "Systems integration and aerospace automation.",
    AUT: "Specialist handling and injection-moulding automation.",
    SGP: "Regional distribution and a growing electronics automation industry.",
    NLD: "Distribution and high-precision positioning technology."
  }
},
{
  id: "telecom", name: "Telecom Equipment", emoji: "📡",
  hs: "HS 8517.62", unit: "network + transmission gear", color: "#b48cf0", group: "Technology",
  blurb: "Routers, switches and mobile base stations — the physical internet. It is the most politically contested market on this map: Huawei equipment has been pushed out of networks across most of the Western world since 2019, which redirected a large share of the business to Ericsson and Nokia without much changing where the boxes are actually assembled.",
  hubs: ["HKG", "NLD", "MYS"],
  notes: {
    CHN: "Huawei and ZTE, and the contract assembly of a great deal of everyone else's equipment as well.",
    VNM: "The main beneficiary of manufacturers moving assembly out of China.",
    MEX: "Assembles for the North American market, close enough to ship overnight.",
    USA: "Cisco and Juniper design most of what they sell and manufacture very little of it.",
    NLD: "European distribution and configuration.",
    KOR: "Samsung's network business, which picked up share as Huawei was excluded.",
    SWE: "Ericsson, one of only two Western vendors with a complete 5G portfolio.",
    FIN: "Nokia, the other one — and a company that survived losing the phone business it was once defined by.",
    DEU: "Industrial networking and a large integration business.",
    HUN: "Central European assembly for the EU market.",
    IND: "Building domestic manufacturing behind production-linked incentives.",
    MYS: "Penang assembles networking hardware alongside its semiconductor packaging.",
    HKG: "Transit rather than manufacture."
  }
},
{
  id: "wind", name: "Wind Turbines", emoji: "🌬️",
  hs: "HS 8502.31", unit: "wind-powered generating sets", color: "#8fe3c4", group: "Technology",
  blurb: "Denmark invented the modern wind industry and still exports more turbines per head than anywhere else, but China now builds more than half the world's capacity — mostly for itself, and increasingly for everyone. The machines have grown so large that the trade is limited as much by what ports and roads can physically move as by demand.",
  caveat: "This heading covers complete wind-powered generating sets. Blades, towers and nacelle components are traded in enormous volume under other headings, so the real trade in wind equipment is considerably larger than what is shown here.",
  hubs: ["NLD"],
  notes: {
    DNK: "Vestas. Wind is one of the defining Danish industries and it grew out of a 1970s tradition of farm workshops building their own machines.",
    CHN: "Installs and now builds more than half the world's capacity, and has begun winning tenders in Europe and South America on price.",
    DEU: "Siemens Gamesa, and an industry that has struggled badly with the economics of ever-larger machines.",
    ESP: "The other half of Siemens Gamesa, and a large components industry around Navarre.",
    IND: "Suzlon and a substantial domestic market, both built well before most of Europe's.",
    NLD: "Assembly, port logistics and the offshore installation vessels the industry depends on.",
    USA: "A large domestic market served mostly by domestic assembly, under content rules.",
    GBR: "Blade manufacturing on the Humber, serving the largest offshore wind fleet in Europe.",
    ITA: "Components and gearboxes rather than complete machines.",
    TUR: "A growing components industry supplying European assemblers.",
    FRA: "Offshore foundations and cabling more than turbines themselves."
  }
},
{
  id: "carparts", name: "Car Parts", emoji: "⚙️",
  hs: "HS 8708", unit: "parts + accessories", color: "#f0925f", group: "Manufactured",
  blurb: "Larger than most of the finished-goods markets on this map, and the reason car manufacturing is regional rather than global: a part crosses borders several times before the car exists, so the industry clusters into three blocs — Germany with central Europe, the United States with Mexico, and East Asia.",
  hubs: ["NLD", "BEL"],
  notes: {
    DEU: "Bosch, ZF and Continental. The German supplier industry is as important as the carmakers and considerably less visible.",
    USA: "A huge supplier base, and an equally huge import bill from just across the southern border.",
    CHN: "Moved from cheap components into complete systems, and now supplies Western carmakers directly.",
    MEX: "The deepest supplier base outside Asia and Europe, built entirely around the American market and renegotiated with every trade deal.",
    JPN: "Denso and Aisin, tied historically to Toyota and now selling to everyone.",
    KOR: "Hyundai Mobis, and a supplier network that scaled with the carmakers.",
    CZE: "Central Europe's largest supplier cluster, feeding German assembly lines a day's drive away.",
    POL: "Seats, wiring and batteries, on lower costs than the west of the EU.",
    ESP: "A supplier industry considerably older than most of the plants it serves.",
    FRA: "Valeo and Faurecia, both among the largest suppliers in the world.",
    ITA: "Specialist components and, in Emilia-Romagna, a supplier base built around performance cars.",
    THA: "Southeast Asia's supplier hub, serving Japanese assembly across the region.",
    IND: "A large and fast-growing supplier industry, increasingly exporting to Europe.",
    TUR: "Close enough to Europe to supply just-in-time, the same advantage it has in clothing."
  }
},
{
  id: "tyres", name: "Tyres", emoji: "🛞",
  hs: "HS 4011", unit: "new pneumatic tyres", color: "#6b7078", group: "Manufactured",
  blurb: "The downstream end of the natural rubber map, and it lands somewhere completely different: the rubber grows in Thailand, Indonesia and Côte d'Ivoire, and the tyres are made in China, Thailand and Germany. Thailand is one of the very few countries that does both.",
  hubs: [],
  notes: {
    CHN: "The largest producer by a wide margin, and the target of anti-dumping duties in both the United States and the EU for over a decade.",
    THA: "Grows the rubber and makes the tyres — including a great deal of Chinese-owned capacity built specifically to sit outside American tariffs.",
    DEU: "Continental, and the premium end of the market where the margin is.",
    JPN: "Bridgestone, the largest tyre company in the world by revenue.",
    KOR: "Hankook and Kumho, competing on the mid-market across Europe and America.",
    USA: "A large producer and a much larger importer.",
    FRA: "Michelin, and the tyre industry's most recognisable rating system alongside it.",
    POL: "Europe's fastest-growing production base, on costs the west cannot match.",
    ESP: "A long-established manufacturing base for several of the majors.",
    IDN: "Rubber at one end and tyres at the other, though less integrated than Thailand.",
    VNM: "New capacity built for the same tariff reasons as Thailand's.",
    ROU: "Central European capacity serving the EU market.",
    ITA: "Pirelli, concentrated almost entirely at the performance end."
  }
},
{
  id: "cigarettes", name: "Cigarettes", emoji: "🚬",
  hs: "HS 2402", unit: "cigarettes + cigars", color: "#d4a05a", group: "Manufactured",
  blurb: "Put this beside the tobacco leaf map and the pattern is the familiar one. The leaf is grown in Brazil, Zimbabwe and Malawi; the cigarettes are made and sold from Poland, Germany and the Netherlands. Manufacturing has concentrated into a handful of very large EU plants that supply a great deal of the world — though the single largest line on this map is Dubai, which manufactures almost none of it and re-exports enormous quantities.",
  hubs: ["ARE", "NLD"],
  notes: {
    POL: "The largest manufacturing exporter in the world, and second only to Dubai's re-export trade. All of the big tobacco companies built major plants here.",
    DEU: "Large-scale manufacturing for the European market and beyond.",
    NLD: "Manufacturing and a substantial re-export trade.",
    IDN: "Kretek clove cigarettes — a domestic tradition on an industrial scale, which also exports.",
    KOR: "A state-descended manufacturer selling across Asia and the Middle East.",
    ARE: "The largest line in this market, and it makes almost none of them — Dubai is the re-export gateway into Africa, Central Asia and the Gulf.",
    GRC: "Manufacturing for the eastern Mediterranean.",
    ROU: "Another of the large EU production sites.",
    TUR: "Both a grower and a manufacturer, selling into its neighbourhood.",
    BRA: "Grows a great deal of the leaf and manufactures a fraction of the cigarettes.",
    CHE: "Headquarters and high-value manufacturing for two of the four majors.",
    PHL: "Regional manufacturing for Southeast Asia.",
    SRB: "A manufacturing base built by foreign investment after 2000."
  }
},
{
  id: "furniture", name: "Furniture", emoji: "🪑",
  hs: "HS 94", unit: "furniture, bedding, lighting", color: "#b98a5e", group: "Manufactured",
  blurb: "Furniture is bulky, which would normally keep the trade local — but flat-packing solved that, and the market reorganised around whoever could design a box that ships densely. China leads on volume, Poland became Europe's workshop, and Vietnam took much of the American business when tariffs hit Chinese goods in 2018.",
  caveat: "The heading is broader than furniture alone: it also covers mattresses and bedding, lamps and lighting fittings, illuminated signs and prefabricated buildings, all of which are counted here.",
  hubs: ["NLD", "BEL"],
  notes: {
    CHN: "Still the largest by a wide margin, though tariffs have moved a substantial share of the American business elsewhere.",
    POL: "Europe's furniture factory, and the source of a very large share of what IKEA sells.",
    VNM: "The single biggest winner from the 2018 American tariffs on Chinese furniture.",
    ITA: "Design-led and firmly at the value end — Italy exports far fewer pieces than China at many times the price.",
    DEU: "Kitchens above all, and a large lighting industry counted in the same heading.",
    MEX: "Supplies the American market from across the border, on the same logic as its car parts industry.",
    USA: "A large manufacturer and a far larger importer.",
    MYS: "Rubberwood furniture — the timber left over when rubber trees stop yielding latex.",
    IND: "A fast-growing exporter, and a very large domestic handicraft industry.",
    TUR: "Serves Europe, the Middle East and North Africa from one production base.",
    CZE: "Central European manufacturing for the German market.",
    LTU: "Furniture is among Lithuania's largest export sectors, mostly for Scandinavian buyers.",
    DNK: "Design rather than volume, and a brand premium built over eighty years."
  }
},
{
  id: "arms", name: "Arms & Ammunition", emoji: "🛡️",
  hs: "HS 93", unit: "weapons + ammunition", color: "#8c9a6b", group: "Manufactured",
  blurb: "This heading covers firearms, ammunition and their parts — and pointedly not most of what the arms trade actually consists of. Read it as the small arms market, which is a real and revealing thing on its own: the United States leads it and European manufacturers with very long histories supply much of the rest, selling largely into the American civilian market.",
  caveat: "HS 93 excludes most of the arms trade by value. Combat aircraft are counted in the aircraft market, warships in ships, and missiles, armoured vehicles and defence electronics under other headings entirely. The real trade in weapons is several times larger than this map shows, and its ranking is quite different.",
  hubs: [],
  notes: {
    USA: "Both the largest exporter in this heading and by far the largest importer — the American civilian market is what most of this trade is for.",
    ITA: "Beretta has been making firearms continuously since the 1520s, which makes it one of the oldest companies of any kind still operating.",
    DEU: "Heckler & Koch and Sig's German heritage, under some of the strictest export licensing in the world.",
    AUT: "Glock, a company that reshaped the handgun market from a standing start in the 1980s.",
    CZE: "A firearms tradition at Uherský Brod that survived both the Nazi occupation and the Communist period intact.",
    BRA: "Taurus, selling largely into the American civilian market at the value end.",
    KOR: "A fast-growing defence exporter, though most of what it sells sits outside this heading.",
    TUR: "A domestic arms industry built deliberately over two decades to reduce import dependence.",
    ISR: "Small arms alongside a much larger trade in systems counted elsewhere.",
    CHE: "Precision manufacturing and ammunition, under export rules strict enough to have blocked resupply to Ukraine.",
    BEL: "FN Herstal, whose designs are carried by a large share of the world's armies.",
    JPN: "Sporting and hunting arms rather than military ones.",
    RUS: "Kalashnikov and a large ammunition industry, now largely sanctioned out of Western markets.",
    FIN: "Sporting rifles and ammunition, with a domestic market shaped by conscription."
  }
},
{
  id: "spacecraft", name: "Spacecraft & Satellites", emoji: "\u{1F6F0}️",
  hs: "HS 8802.60", unit: "satellites + launch vehicles", color: "#cbb8f5", group: "Manufactured",
  partOf: "aircraft",
  blurb: "Satellites and launch vehicles sold across a border — and a market that mostly does not exist in trade statistics. The American share falls from 42% in 2015 to under a tenth by 2023, which is not a collapse: it is SpaceX. Launching someone else's satellite is a service, and Starlink's satellites never change owner or cross a customs frontier, so the company that reordered the industry is close to invisible here. What is left is hardware — a communications satellite built in Toulouse and shipped to its buyer.",
  caveat: "Launch is a service and operating a constellation is a service, so neither appears in merchandise trade at all. This heading counts only spacecraft sold abroad as physical goods, which is a small and unrepresentative corner of the space economy — and precisely why the most famous company in the industry barely registers. It also sits inside the aircraft heading, so it is counted there as well.",
  hubs: [],
  notes: {
    FRA: "Toulouse is Europe's satellite factory. Airbus Defence and Space and Thales Alenia between them build a large share of the world's commercial communications satellites — and unlike their American rivals, they sell them to other people.",
    USA: "Was 42% of this market in 2015 and a fraction of that now. American space activity did not shrink; it moved into launch services and into constellations the operator owns outright, and neither of those is a traded good.",
    DEU: "OHB in Bremen, plus a large share of the European institutional programmes.",
    ITA: "The other half of Thales Alenia, and a long-standing role in European launch.",
    GBR: "Stevenage builds spacecraft, and Glasgow builds more small satellites than anywhere else in Europe.",
    ISR: "Small reconnaissance and communications satellites, sold to a short list of governments.",
    KOR: "A recent entrant, on the back of its own launcher programme.",
    JPN: "Institutional rather than commercial — most Japanese spacecraft are built for Japanese use.",
    CHN: "Builds and launches a great deal and exports very little, largely on turnkey terms to partner governments.",
    ESP: "Payloads and structures for the European primes.",
    RUS: "Soyuz launch vehicles and satellite hardware — a trade that sanctions and the loss of the OneWeb contract have almost entirely ended.",
    LUX: "Home to SES, one of the largest satellite operators in the world: an operator rather than a builder.",
    CAN: "Robotics and communications payloads, a specialism dating back to the Shuttle arm.",
    IND: "Builds cheaply and launches for others, though the launch side is a service and is not counted here.",
    FIN: "Small satellite manufacturing, mostly radar imaging."
  }
}
];
