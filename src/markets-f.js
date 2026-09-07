// Export Atlas - markets, part 6 of 6. See markets-a.js for the header.

module.exports = [
{
  id: "tobacco", name: "Tobacco Leaf", emoji: "🚬",
  hs: "HS 2401", unit: "unmanufactured leaf", color: "#9c7b4a", group: "Agriculture",
  blurb: "Raw leaf, not cigarettes — and the map looks nothing like a map of who smokes. Brazil and Zimbabwe grow it for export while the manufacturing and the margin sit somewhere else entirely. In Malawi and Zimbabwe tobacco has been the largest single export for decades, which makes falling Western demand a fiscal problem as much as a health one.",
  hubs: ["BEL", "NLD", "DEU"],
  notes: {
    BRA: "The largest exporter of leaf in the world, grown mostly on small family farms across the three southern states.",
    ZWE: "Tobacco is Zimbabwe's biggest export by a wide margin, and the crop that came through the land reform upheaval better than any other.",
    IND: "One of the largest producers on earth, and it smokes or chews most of what it grows.",
    USA: "Once the defining American export crop. Ending the federal quota system in 2004 consolidated it into far fewer and much larger farms.",
    MWI: "Among the most tobacco-dependent economies anywhere — it has repeatedly been more than half of Malawi's export earnings.",
    CHN: "The largest producer in the world and barely an exporter: the state monopoly sells to its own enormous domestic market.",
    BEL: "Leaf storage and processing rather than growing.",
    NLD: "Rotterdam is where a great deal of the world's leaf changes hands.",
    TUR: "Oriental tobacco, a distinct sun-cured leaf used for blending rather than on its own.",
    TZA: "One of Africa's fastest-growing producers, largely on Chinese demand.",
    MOZ: "Grown under contract farming schemes that reach a large share of the rural population."
  }
},
{
  id: "rubber", name: "Natural Rubber", emoji: "🛞",
  hs: "HS 4001", unit: "latex + sheet", color: "#7fa3a0", group: "Agriculture",
  blurb: "Every truck and aircraft tyre still depends on trees. Synthetic rubber cannot match natural latex for heat resistance and tear strength, so the material has no substitute at the heavy end — and almost all of the trees are in Southeast Asia, descended from seeds taken out of the Amazon in 1876.",
  hubs: ["SGP"],
  notes: {
    THA: "The largest producer and exporter for decades, and unusually it is a smallholder industry rather than a plantation one.",
    IDN: "Second, and the crop that first drew Sumatra into the world economy.",
    CIV: "Africa's largest producer and now among the top few in the world — the crop Côte d'Ivoire pushed hardest to diversify away from cocoa.",
    VNM: "Grown largely on former state farms in the central highlands.",
    MYS: "The country that industrialised rubber after the British brought seedlings from Kew, and now more processor and trader than grower.",
    BRA: "Where the tree comes from. Brazil lost the entire industry to leaf blight and to seeds smuggled to Asia — the Amazon rubber boom ended almost overnight.",
    LAO: "Planted on a large scale with Chinese investment, aimed at Chinese tyre factories.",
    MMR: "A growing producer, hampered by quality and by the political situation.",
    SGP: "The regional trading and pricing centre for a crop it does not grow.",
    CMR: "West and Central Africa's other significant producer.",
    IND: "Kerala grows most of it, and India consumes nearly all of its own crop."
  }
},
{
  id: "avocado", name: "Avocados", emoji: "🥑",
  hs: "HS 080440", unit: "fresh fruit", color: "#5da85f", group: "Agriculture",
  blurb: "One of the fastest-growing food trades on earth: exports have multiplied several times over this century as the fruit went from regional staple to global brunch fixture. Michoacán supplies most of it, from orchards close enough to the United States to pick ripe and truck north.",
  hubs: ["NLD", "ESP"],
  notes: {
    MEX: "Michoacán is one of the few places where avocado trees flower year-round, so Mexico can ship every month of the year. The money involved has drawn serious cartel extortion into the orchards.",
    NLD: "Ripening rooms and distribution for the whole of Europe. Not one is grown here.",
    PER: "Counter-seasonal to Mexico, which is precisely why European buyers built the trade.",
    CHL: "The earliest Southern Hemisphere exporter, though water scarcity in Petorca has become a national argument.",
    ESP: "Europe's only significant grower, in Málaga and Granada, and a large re-exporter besides.",
    ZAF: "Ships into Europe in the northern summer gap.",
    COL: "The fastest-growing new origin, on Hass planted at altitude.",
    KEN: "Africa's largest exporter, and increasingly a supplier to China.",
    ISR: "A long-established grower with an unusually high yield per hectare.",
    DOM: "The largest producer of green-skinned varieties, sold mainly into the United States."
  }
},
{
  id: "wool", name: "Wool", emoji: "🐑",
  hs: "HS 5101", unit: "greasy + scoured", color: "#cfc6b4", group: "Agriculture",
  blurb: "One producer and one buyer. Australia alone grows more than two thirds of the wool that crosses a border and most of it goes to China to be scoured and spun. Fine merino for suits and coarse crossbred for carpets are effectively different commodities that happen to share a customs heading — which is why South Africa, selling merino, out-earns New Zealand, selling carpet wool.",
  hubs: [],
  notes: {
    AUS: "Merino, and the great majority of it goes to China. The national flock is a fraction of what it was before the 1991 collapse of the reserve price scheme.",
    NZL: "Coarse crossbred wool for carpets and insulation — a market synthetic fibre has been eating for fifty years.",
    ZAF: "Fine merino from the Eastern Cape, sold into the same Chinese mills.",
    GBR: "British wool is coarse and cheap; in some years the clip has been worth less than the cost of shearing it.",
    URY: "One of the few economies where wool is still a meaningful share of exports.",
    ARG: "Patagonian merino, on a scale far below its early twentieth-century peak.",
    FRA: "A processing and trading role more than a producing one.",
    DEU: "Scouring and topmaking for the European textile industry.",
    CZE: "A small but persistent wool-processing industry."
  }
},
{
  id: "timber", name: "Sawn Timber", emoji: "🪵",
  hs: "HS 4407", unit: "sawn wood", color: "#8f6a4a", group: "Agriculture",
  blurb: "Softwood lumber mostly, which makes this a map of boreal forest with a few tropical exceptions. It is also among the most litigated trades there is: the United States and Canada have been arguing about softwood duties, on and off, since 1982, through five separate rounds of disputes.",
  hubs: [],
  notes: {
    CAN: "British Columbia spruce-pine-fir, almost all of it to the United States, and the subject of the longest-running trade dispute in North America.",
    RUS: "Banned exports of unprocessed logs in 2022 to force sawmilling onshore; sanctions then closed the European market it had been aiming at.",
    SWE: "Managed boreal forest, planted and cut on a rotation measured in decades and mapped tree by tree.",
    FIN: "Same forest, same model, and an industry that is a far larger share of a smaller economy.",
    DEU: "Bark beetle outbreaks killed so much spruce that Germany briefly became one of the largest exporters in the world, selling salvaged timber.",
    BRA: "Both plantation pine and, more contentiously, tropical hardwood.",
    CHL: "Radiata pine plantations, one of the fastest-growing softwoods anywhere.",
    AUT: "Alpine spruce, and a sawmilling industry that processes far more than Austria grows.",
    USA: "A large exporter and a much larger importer, depending entirely on the housing cycle.",
    NZL: "Radiata pine, most of it shipped as logs to China rather than sawn at home.",
    LVA: "Timber is among the largest export sectors of all three Baltic states."
  }
},
{
  id: "vanilla", name: "Vanilla", emoji: "🌼",
  hs: "HS 0905", unit: "cured beans", color: "#d9c48a", group: "Agriculture",
  blurb: "The second most expensive spice after saffron, and one of the most concentrated markets of any kind on this map: a single island supplies about half of it. Vanilla is orchid fruit, hand-pollinated one flower at a time and cured over months, and the price has swung by a factor of ten within a decade as cyclones and speculation hit Madagascar.",
  hubs: ["FRA", "DEU", "USA"],
  notes: {
    MDG: "The Sava region grows most of the world's vanilla. Cyclone Enawo in 2017 pushed prices past $500 a kilo and brought theft, night patrols and a great many beans picked before they were ready.",
    IDN: "The main alternative origin, and the one buyers turn to whenever Madagascar's price runs away.",
    PNG: "A smallholder crop grown alongside cocoa and coffee.",
    UGA: "Two harvests a year rather than one, which is unusual for the crop.",
    FRA: "Curing, grading and re-export, and the historic link to Réunion where hand-pollination was worked out in 1841.",
    DEU: "Extraction into vanilla flavouring for the food industry.",
    USA: "The largest consumer market, and a substantial re-exporter of extract.",
    MEX: "Where the vanilla orchid comes from, and for centuries the only place it would fruit — its pollinating bee lives nowhere else.",
    IND: "A small producer that expanded during the price spike and largely retreated afterwards.",
    COM: "The Comoros, along with Madagascar and Réunion, make up the historic Indian Ocean vanilla islands."
  }
},
{
  id: "beer", name: "Beer", emoji: "🍺",
  hs: "HS 2203", unit: "beer from malt", color: "#e0a63c", group: "Food & drink",
  blurb: "The largest beer exporter in the world is Mexico, and it is not close. Corona and Modelo heading north account for most of it — one brand family crossing one border, worth more than the entire exporting output of Germany, the country most people would name first.",
  hubs: ["SGP"],
  notes: {
    MEX: "Mostly Corona and Modelo crossing a single border. Mexico passed the Netherlands to lead this market in the 2010s and has pulled away since.",
    NLD: "Heineken is brewed in more countries than any other beer, and the Netherlands still exports a great deal of it from home.",
    BEL: "Abbey ales and lambics fetch prices no volume brewer can approach, on a fraction of the litres.",
    DEU: "Enormous production and a stubbornly domestic industry — Germans drink most of what Germany brews.",
    IRL: "Guinness, brewed at St James's Gate and shipped in concentrate to be reconstituted abroad.",
    CZE: "The country that invented pilsner and still drinks more beer per head than anywhere else.",
    GBR: "Ale and stout, and a large contract-brewing business for foreign brands.",
    FRA: "Kronenbourg and a fast-growing craft sector in Alsace and the north.",
    ESP: "One of Europe's largest producers, and almost all of it drunk at home or by visitors.",
    SGP: "A regional distribution point rather than a brewing centre.",
    POL: "Europe's third-largest producer by volume, on very low costs."
  }
},
{
  id: "pork", name: "Pork", emoji: "🐖",
  hs: "HS 0203", unit: "fresh + frozen", color: "#e39aa0", group: "Food & drink",
  blurb: "More pork is eaten than any other meat, and the trade turns on one event: African swine fever killed a large share of China's pigs from 2018, China went to the world market, and Spain — which had quietly built the largest pig industry in Europe — took the top position and kept it.",
  hubs: ["NLD", "BEL"],
  notes: {
    ESP: "Spain built the biggest pig industry in Europe and was positioned exactly right when Chinese demand spiked after African swine fever.",
    USA: "The lowest-cost large producer, selling into Mexico, Japan and Korea.",
    DEU: "Was Europe's leading exporter until African swine fever in wild boar closed its Asian markets in 2020.",
    NLD: "Slaughter and processing at a scale far beyond Dutch consumption, much of it for re-export.",
    CAN: "Sells into the United States, Japan and China, and imports American piglets to finish.",
    BRA: "The fastest-growing exporter, on cheap feed from its own soy and maize.",
    DNK: "Several times more pigs than people, and an industry organised around export from the beginning.",
    CHN: "The largest producer and the largest importer at once — it eats roughly half the world's pork.",
    POL: "A large producer and an even larger importer of piglets from Denmark and the Netherlands.",
    FRA: "Brittany does most of it, and the industry is a persistent source of water pollution disputes.",
    BEL: "Processing and re-export, and briefly shut out of Asia by its own swine fever outbreak in 2018.",
    MEX: "A growing exporter to Japan even as it remains a huge importer from the United States."
  }
},
{
  id: "poultry", name: "Poultry", emoji: "🍗",
  hs: "HS 0207", unit: "chicken + turkey", color: "#f0c9a0", group: "Food & drink",
  blurb: "The cheapest meat to produce and the fastest-growing, and Brazil sells more of it than anyone. The trade runs on a quiet asymmetry: rich countries want breast meat and much of the rest of the world prefers legs, wings and feet, so the same bird is sold in opposite directions.",
  hubs: ["NLD", "BEL", "DEU"],
  notes: {
    BRA: "The largest exporter in the world, and for years the only major producer without a high-pathogenicity bird flu outbreak on a commercial farm.",
    USA: "Exports the dark meat and the feet that Americans will not eat, largely to Asia and West Africa.",
    NLD: "Processing and re-export — the Netherlands trades far more poultry than it raises.",
    POL: "The EU's largest producer, built in about twenty years on costs the west of the union cannot match.",
    THA: "Cooked and processed chicken for Japan and Europe, a niche built deliberately after bird flu closed the raw trade in 2004.",
    TUR: "A large exporter into the Middle East, with an industry that scaled quickly in the 2010s.",
    UKR: "One producer accounts for most of it, and the war cost the industry a large part of its flock.",
    CHN: "Both a major processor of imported meat and an exporter of cooked product.",
    DEU: "Slaughter and processing, with a heavy reliance on imported birds.",
    BEL: "Cutting and re-export for the European market.",
    HUN: "Foie gras and duck as much as chicken — a specialist rather than a volume exporter."
  }
},
{
  id: "uranium", name: "Uranium & Nuclear Fuel", emoji: "☢️",
  hs: "HS 2844", unit: "radioactive elements", color: "#7fe05a", group: "Energy",
  blurb: "A market with barely any spot price and contracts measured in decades. Kazakhstan mines about two fifths of the world's uranium, but Russia holds a far larger share of the enrichment capacity that turns ore into fuel — which is why sanctions on Russian nuclear fuel took years to write and are still being phased in.",
  hubs: ["NLD", "DEU"],
  notes: {
    KAZ: "Roughly two fifths of world uranium production, almost all by in-situ leaching — pumping solution through the ore body rather than digging it out.",
    RUS: "Mines a modest share and enriches an enormous one. A large part of the West's reactor fuel has passed through Russian centrifuges.",
    CAN: "The Athabasca basin holds the highest-grade uranium ever found, in ore bodies too radioactive to mine by hand.",
    NAM: "Two very large open pits in the Namib desert, mining ore grades a fraction of Canada's.",
    AUS: "Holds the largest reserves in the world and mines cautiously, under state-by-state bans that have only recently loosened.",
    NER: "Niger's uranium supplied French reactors for half a century; the 2023 coup put that arrangement in doubt.",
    UZB: "A steady mid-sized producer that sells mainly east.",
    FRA: "Enrichment and fuel fabrication rather than mining — Orano's plants serve reactors across Europe.",
    NLD: "Urenco's Almelo plant, one of the few enrichment sites outside Russia.",
    DEU: "Fuel fabrication and the transit that comes with it.",
    GBR: "The third leg of Urenco, at Capenhurst.",
    USA: "A large importer of enrichment services and, since the sanctions, in a hurry to rebuild its own."
  }
},
{
  id: "electricity", name: "Electricity", emoji: "⚡",
  hs: "HS 2716", unit: "electrical energy", color: "#ffe14d", group: "Energy",
  blurb: "The only thing on this map that cannot be stored or shipped — it can only be wired to a neighbour, which makes this a map of borders rather than of resources. Laos and Paraguay appear because they built dams far larger than they could ever use, and sell the surplus to whoever is on the other side of the line.",
  hubs: ["CHE", "AUT"],
  notes: {
    FRA: "Europe's largest exporter in most years, on a nuclear fleet built to run flat out. When those reactors went offline for corrosion checks in 2022, France became a net importer for the first time in decades.",
    DEU: "A large exporter and a large importer at once: the German grid is the crossroads of the European market.",
    CAN: "Quebec and Manitoba hydro, sold south into New England and the upper Midwest.",
    SWE: "Hydro in the north, nuclear in the south, and a persistent surplus.",
    NOR: "Almost entirely hydro, and increasingly a battery for the North Sea wind fleet through undersea cables.",
    CHE: "Buys cheap at night and sells dear at peak — pumped storage run as an export business.",
    AUT: "Alpine hydro and a trading role between Germany and Italy.",
    LAO: "Set out to be the battery of Southeast Asia, damming Mekong tributaries to sell power to Thailand and Vietnam. The debt behind it is a national issue.",
    PRY: "Itaipú and Yacyretá generate several times what Paraguay uses; the surplus goes to Brazil and Argentina under treaties that have been argued over for decades.",
    CZE: "A coal and nuclear surplus sold into Germany and Austria.",
    BGR: "The Balkans' main exporter, on nuclear and lignite.",
    ESP: "Sells into Portugal and, over a famously thin interconnection, into France."
  }
},
{
  id: "steel", name: "Steel", emoji: "🏗️",
  hs: "HS 72", unit: "iron + steel", color: "#6f7d8c", group: "Minerals & materials",
  blurb: "The industry every country wants and almost nobody runs profitably at scale. China makes more steel than the rest of the world combined and exports only a fraction of it — and that fraction is still enough to set the world price and to draw more anti-dumping cases than any other product traded.",
  hubs: ["NLD", "BEL"],
  notes: {
    CHN: "Produces more steel than everyone else put together. Its exports are a small share of its own output and a very large share of world trade, which is why they are litigated everywhere.",
    JPN: "High-grade sheet for cars and appliances, sold on specification rather than price.",
    KOR: "POSCO, built from nothing in the 1970s with Japanese reparations money and now among the most efficient mills anywhere.",
    DEU: "Specialty and electrical steels, and an industry facing an expensive conversion to hydrogen.",
    RUS: "Sanctioned out of the European market it had supplied for decades, and now selling east at a discount.",
    IND: "Overtook Japan to become the second-largest producer in the world, and unlike China it is still building.",
    TUR: "The largest steelmaker in Europe by output, running almost entirely on imported scrap in electric arc furnaces.",
    UKR: "Mariupol's two enormous mills were destroyed in 2022 and the industry lost most of its capacity.",
    ITA: "Brescia's scrap-based mini-mills, plus Taranto, the largest and most contested blast furnace in Europe.",
    TWN: "China Steel, and a large specialty stainless business.",
    BEL: "Rolling and coating rather than smelting, and a major transit route.",
    NLD: "IJmuiden, one of the last integrated works on the North Sea coast."
  }
},
{
  id: "platinum", name: "Platinum & Palladium", emoji: "⚪",
  hs: "HS 7110", unit: "platinum group metals", color: "#e8eef2", group: "Minerals & materials",
  blurb: "South Africa holds around three quarters of the world's reserves and mines most of the supply, from shafts among the deepest and most dangerous workplaces on earth — but like gold, the metal is re-refined and re-traded far more often than it is dug up, so London, Zurich and Hong Kong stand high on this map without a mine between them. Most of it ends up in catalytic converters, which ties the market to a technology the car industry is busy leaving behind.",
  hubs: ["GBR", "CHE", "HKG", "ITA"],
  notes: {
    ZAF: "The Bushveld complex holds the overwhelming majority of world reserves. The mines run several kilometres down, and the industry's modern history runs through the 2012 Marikana killings.",
    RUS: "Palladium more than platinum, produced as a by-product of Norilsk's nickel — which makes its supply hostage to a different market entirely.",
    GBR: "London is where the metal is priced and much of it is vaulted.",
    CHE: "Refining and vaulting, on the same model as its gold business.",
    ZWE: "The Great Dyke is the only other significant primary platinum geology anywhere on earth.",
    USA: "Two mines in Montana, and a large recycling industry pulling metal back out of scrapped catalytic converters.",
    DEU: "Refining and the autocatalyst manufacturing that consumes most of the metal.",
    JPN: "A large importer and refiner, and historically the biggest market for platinum jewellery.",
    ITA: "Jewellery manufacturing, mainly in Vicenza.",
    HKG: "The route into Chinese jewellery demand."
  }
},
{
  id: "nickel", name: "Nickel", emoji: "🪙",
  hs: "HS 2604 + 7502 + 7202.60", unit: "ore, metal, ferronickel", color: "#b9c9a8", group: "Minerals & materials",
  blurb: "Two thirds of nickel goes into stainless steel and a fast-growing remainder into batteries — and Indonesia has reorganised the entire market around itself. It banned raw ore exports outright in 2020 to force smelting onshore, and within a few years was supplying more than half the world.",
  hubs: ["NLD", "JPN"],
  notes: {
    IDN: "Banned ore exports in 2020 and built the smelters instead, mostly with Chinese capital. Indonesia was 2% of this market in 2015 and is around half of it now — step the years and you can watch the policy work.",
    RUS: "Norilsk produces some of the highest-purity class 1 nickel, the grade batteries actually need, from mines inside the Arctic Circle.",
    CAN: "Sudbury has been mined since the 1880s — the crater of an ancient meteorite impact.",
    AUS: "A high-cost producer that has repeatedly mothballed mines when Indonesian supply pushed the price down.",
    PHL: "The main alternative ore supplier to China after Indonesia shut its exports, and the subject of its own mining bans.",
    NOR: "Refines imported ore using cheap hydro power.",
    FIN: "Harjavalta, one of the few refineries in Europe able to make battery-grade nickel.",
    JPN: "Imports ore and exports refined metal, as it does with copper.",
    CHN: "Refines far more than it mines, and owns much of the Indonesian smelting capacity outright.",
    NCL: "New Caledonia sits on a large share of world reserves and has never managed to mine it without political crisis.",
    BRA: "A mid-sized producer with laterite deposits similar to Indonesia's."
  }
},
{
  id: "plastics", name: "Plastics", emoji: "♻️",
  hs: "HS 39", unit: "polymers + articles", color: "#d96fd9", group: "Minerals & materials",
  blurb: "Plastic is what oil becomes when it is not burned, so this is really the petrochemical industry's map: the Gulf turning cheap gas into polymer, China and the United States turning shale into it, and Germany and Belgium turning polymer into everything else. It is one of the largest merchandise trades in the world.",
  hubs: ["NLD", "BEL", "SGP"],
  notes: {
    CHN: "The largest producer and the largest importer at once, and increasingly self-sufficient in the basic polymers it used to buy.",
    USA: "Cheap shale ethane rebuilt the American petrochemical industry along the Gulf Coast after decades of decline.",
    DEU: "Less raw polymer than finished parts, specialty compounds and the machinery to process them.",
    KOR: "A very large refining and petrochemical complex at Yeosu and Daesan, built to export.",
    BEL: "Antwerp is the second-largest petrochemical cluster in the world after Houston.",
    NLD: "Rotterdam's cluster, and the trading that goes with it.",
    SAU: "Cheap ethane — the lowest-cost feedstock there is — turned into polyethylene at Jubail and Yanbu.",
    JPN: "High-value engineering plastics and films rather than commodity resin.",
    TWN: "Formosa Plastics, one of the largest privately held chemical groups anywhere.",
    ITA: "Packaging and machinery, and a large converting industry.",
    THA: "Southeast Asia's petrochemical hub, at Map Ta Phut.",
    IND: "Growing fast, and building refinery-integrated petrochemical capacity at scale."
  }
},
{
  id: "rareearth", name: "Rare Earths", emoji: "🧲",
  hs: "HS 284690", unit: "rare earth compounds", color: "#8f5fd6", group: "Minerals & materials",
  blurb: "They are not actually rare. What is rare is the willingness to do the separation, which is chemically miserable and produces radioactive waste — so China does most of it, and has twice shown it will use that position: against Japan in 2010, and in the export controls tightened since 2023. What tops this particular heading is the feedstock going the other way: Myanmar digs the heavy rare earths that Chinese separation plants run on, in mines outside any government's effective control.",
  hubs: ["NLD"],
  notes: {
    MMR: "Kachin state supplies most of the heavy rare earth ore China separates, from unregulated mines in territory the central government does not control. It is the largest line in this market and the least visible.",
    CHN: "Dominates separation and refining even more thoroughly than mining, and has used export licensing as leverage more than once.",
    MYS: "The Lynas plant at Kuantan is the largest separation facility outside China, and has been fought over locally on waste grounds for more than a decade.",
    JPN: "Built stockpiles, recycling and alternative supply after China cut it off in 2010 — the episode that started every de-risking programme since.",
    USA: "Mountain Pass produces concentrate and has historically shipped it to China to be separated, which is the whole problem in one sentence.",
    FRA: "Solvay's La Rochelle plant, one of the few European separators, running since the 1940s.",
    EST: "Silmet in Sillamäe, a Soviet-era plant that is now part of Europe's small rare earth capacity.",
    AUT: "Specialist processing and magnet-adjacent metallurgy.",
    DEU: "Magnet manufacturing rather than separation — the step immediately downstream.",
    IND: "Large monazite reserves and very little separation capacity, a gap it is now trying to close.",
    VNM: "Substantial reserves, negligible processing, and repeated false starts at building it.",
    GBR: "Trading and specialist chemicals rather than volume."
  }
},
{
  id: "chipgear", name: "Chipmaking Machines", emoji: "🔬",
  hs: "HS 8486", unit: "semiconductor equipment", color: "#4fd1e0", group: "Technology",
  blurb: "The bottleneck behind the semiconductor map. One Dutch company makes every extreme-ultraviolet lithography machine in existence — each costs upwards of $200m, ships in several aircraft, and no leading-edge chip can be made without one. Export controls on these tools are the sharpest instrument in the whole technology conflict.",
  hubs: ["SGP"],
  notes: {
    NLD: "ASML in Veldhoven is the only maker of EUV lithography machines anywhere. On any measure of leverage it is the most consequential company on this map.",
    JPN: "Tokyo Electron, plus Nikon and Canon in older lithography. Japan supplies more of the toolchain than anyone except the Netherlands.",
    USA: "Applied Materials, Lam Research and KLA — deposition, etch and inspection rather than lithography, and the origin of most of the export controls.",
    SGP: "Both a manufacturing site for several toolmakers and the regional distribution point.",
    KOR: "Building domestic equipment capacity to reduce its dependence on the same three countries.",
    TWN: "Buys more of this equipment than almost anyone and makes a growing share of the ancillary tooling.",
    CHN: "Buying every tool it is still permitted to buy, and building the ones it is not — with SMEE the most watched company in the country.",
    DEU: "Zeiss makes the optics inside ASML's machines, to tolerances measured in atoms.",
    AUT: "Specialist wafer bonding and lithography for smaller nodes.",
    MYS: "Assembly and test equipment, alongside its packaging industry."
  }
},
{
  id: "medical", name: "Medical Instruments", emoji: "🩺",
  hs: "HS 9018", unit: "instruments + appliances", color: "#63b8f5", group: "Technology",
  blurb: "Scanners, catheters, surgical tools, dialysis machines — a market that grows with age and income and essentially never shrinks. It is unusually European: Germany, the Netherlands and Ireland together sell more than the United States does, on precision manufacturing and on where the multinationals choose to book their production.",
  hubs: ["NLD", "BEL", "IRL"],
  notes: {
    DEU: "A dense cluster of small precision manufacturers around Tuttlingen, which has been making surgical instruments since the 1860s.",
    USA: "The largest medtech industry in the world by revenue, though a great deal of its output is manufactured abroad.",
    NLD: "Philips in imaging, plus a substantial distribution role for the European market.",
    CHN: "Moved quickly from disposables into imaging and monitoring equipment, and now competes on price in both.",
    MEX: "Tijuana and Ciudad Juárez assemble much of the disposable device supply for the United States.",
    IRL: "A dozen of the largest device makers manufacture in Ireland, for the same reasons the pharmaceutical industry does.",
    JPN: "Endoscopes above all — Olympus has long held most of that world market.",
    CHE: "Dental and orthopaedic implants, and the machining precision that goes with a watch industry.",
    BEL: "Distribution and repackaging for the EU.",
    FRA: "Diagnostics and imaging, and a large hospital equipment sector.",
    KOR: "Dental imaging and aesthetic devices, growing fast.",
    SGP: "Contract manufacturing for several of the American majors."
  }
},
{
  id: "footwear", name: "Footwear", emoji: "👟",
  hs: "HS 64", unit: "all footwear", color: "#c98a5e", group: "Manufactured",
  blurb: "Something like 24 billion pairs of shoes are made each year, and most of them start in two countries. Footwear has followed the same path as clothing — Italy, then Korea and Taiwan, then China — and is moving again, with Vietnam taking the athletic business almost in its entirety.",
  hubs: ["DEU", "BEL", "NLD", "HKG"],
  notes: {
    CHN: "Still the largest by volume by a wide margin, though its share has fallen every year for a decade.",
    VNM: "Nike and Adidas make more shoes in Vietnam than anywhere else on earth, and footwear is among the country's largest exports.",
    ITA: "The value end. Italy exports a small fraction of China's pairs at many times the price per pair.",
    IDN: "The third leg of the athletic industry, and the fallback whenever Vietnamese costs rise.",
    DEU: "Distribution rather than manufacture — the European warehouse for several global brands.",
    BEL: "Antwerp handles a large share of Europe's shoe imports and sends them on.",
    IND: "A very large domestic industry that exports comparatively little, concentrated in Tamil Nadu and Agra.",
    ESP: "Alicante's leather industry, and the volume brands that grew out of it.",
    PRT: "Europe's quiet success story in footwear — high-value, quick-turnaround, and growing.",
    TUR: "Close enough to Europe to restock in days, the same advantage it has in clothing.",
    KHM: "One of the newer low-cost bases, alongside its garment industry.",
    BRA: "Once a major exporter to the United States, now largely serving its own domestic market."
  }
},
{
  id: "cosmetics", name: "Perfume & Cosmetics", emoji: "💄",
  hs: "HS 33", unit: "essential oils + preparations", color: "#f06fa8", group: "Manufactured",
  blurb: "France sells more perfume and cosmetics than any other country and has done for as long as the trade has been counted — an industry built on the flower fields around Grasse, a handful of houses, and the fact that the name on the bottle is most of what is being bought. Korea is the challenger, and its rise is the clearest cultural export story in this atlas.",
  hubs: ["SGP", "NLD", "BEL", "IRL"],
  notes: {
    FRA: "L'Oréal, LVMH and Chanel. Cosmetics are consistently among France's largest export categories, ahead of most of what it manufactures.",
    USA: "Mass-market beauty at scale, and the largest single consumer market in the world.",
    DEU: "Personal care and household-name mass brands rather than luxury.",
    SGP: "A regional manufacturing and distribution hub for most of the large groups.",
    KOR: "K-beauty went from nothing to a major export in about fifteen years, carried by the same cultural wave as its music and television.",
    ITA: "Contract manufacturing — a large share of the world's lipstick is made in Lombardy for brands that never mention it.",
    GBR: "Fragrance houses and a large retail-driven export trade.",
    ESP: "Puig, plus a substantial fragrance manufacturing base.",
    IRL: "Contract manufacturing and, as everywhere else on this map, booking.",
    POL: "Europe's low-cost contract manufacturing base for cosmetics.",
    JPN: "Skincare above all, and an export business built on the same regional demand Korea competes for.",
    CHN: "Growing fast domestically, and beginning to export brands rather than only ingredients."
  }
}
];
