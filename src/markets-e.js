// Export Atlas - markets, part 5 of 5: SERVICES. See markets-a.js for the header.
//
// These six come from the World Bank's balance-of-payments series rather than
// UN Comtrade, because Comtrade's own services database has no United Kingdom
// in it at all - see the note in tools/markets-meta.js. Same reference year as
// the goods markets.

module.exports = [
{
  id: "services", name: "Commercial Services", emoji: "🧾",
  hs: "BoP services, total", unit: "all services", color: "#9aa7b8", group: "Services",
  umbrella: true,
  blurb: "Services are about a quarter of world trade and the fastest-growing quarter, and the map barely resembles the goods maps. Nothing is loaded onto a ship: this is consultancy billed across a border, a tourist's hotel bill, a licence fee, a container booked in Singapore. Ireland ranks fourth in the world on it, from a population of five million.",
  hubs: ["IRL", "NLD", "LUX"],
  notes: {
    USA: "The largest services exporter by a wide margin — and the reason the American trade balance is less lopsided than the goods deficit alone suggests. The goods gap gets the attention; the services surplus rarely does.",
    GBR: "Services are what Britain sells. Its surplus on them is among the largest in the world, and it offsets a large part of a persistent goods deficit.",
    DEU: "The mirror image of Britain: a goods powerhouse whose services trade is modest for the size of the economy.",
    IRL: "Fourth in the world from five million people. Software licensing, R&D and royalties booked in Dublin do most of it, which is a tax structure as much as an industry.",
    FRA: "Tourism, transport and business services in roughly equal measure — an unusually balanced services economy.",
    SGP: "Shipping, finance and the regional headquarters of a large share of Asian business, on an island of six million.",
    IND: "Built the largest services export business in the developing world out of IT and back-office work in about thirty years.",
    CHN: "Dominant in goods and comparatively small in services — the exact inverse of the American position.",
    NLD: "Royalties, transport and business services routed through Dutch holding structures.",
    JPN: "Patent income and tourism, from a country whose services exports have grown far slower than its neighbours'.",
    LUX: "Fund administration for the whole of Europe, from a country of 670,000 people.",
    CHE: "Finance, insurance and pharmaceutical licensing."
  }
},
{
  id: "travel", name: "Travel & Tourism", emoji: "🧳",
  hs: "BoP services · travel", unit: "visitor spending", color: "#ff8a5b", group: "Services",
  blurb: "The one export where the customer comes to collect it. A visitor's hotel bill, restaurant meal and museum ticket all count as exports by the country they are standing in — which is why tourism is the largest single export earner for dozens of small economies, and why Spain, a mid-sized country, is second in the world.",
  hubs: [],
  notes: {
    USA: "First, but on an unusual mix: business travel and foreign students. University tuition paid by a non-resident counts here, and American universities collect a great deal of it.",
    ESP: "Second in the world on tourism alone, from a country of 48 million. In a normal year it receives well over 80 million visitors.",
    FRA: "The most visited country on earth by arrivals, but visitors spend less per head than in Spain or the United States, so it earns less than either.",
    GBR: "London does most of it, and the figure has never fully recovered its pre-2016 share.",
    ARE: "Dubai turned a refuelling stop into a destination, and then into one of the most visited cities in the world.",
    ITA: "Art cities and coastline, with the sharpest seasonal concentration of any large destination.",
    TUR: "The fastest-growing large destination of the last decade, helped considerably by a collapsing currency making it cheap.",
    THA: "Tourism was close to a fifth of Thai GDP before 2020, which made the closure of the borders the deepest economic shock in Southeast Asia.",
    AUS: "Education is the larger half — foreign students are Australia's biggest services export.",
    JPN: "A weak yen made Japan abruptly cheap, and visitor numbers hit records the moment it reopened.",
    MEX: "Beach resorts on two coasts, and almost entirely one source market.",
    SAU: "Religious pilgrimage has always been an export; tourist visas for everyone else only arrived in 2019.",
    CAN: "Heavily concentrated on visitors from one neighbour.",
    HRV: "Tourism is a larger share of GDP than in almost any other European country.",
    GRC: "Islands and archaeology, and the sector that carried the economy back out of the debt crisis."
  }
},
{
  id: "transport", name: "Transport & Freight", emoji: "🚛",
  hs: "BoP services · transport", unit: "freight + passenger", color: "#4a9fd4", group: "Services",
  blurb: "What it costs to move everything on the other maps. The ranking follows shipping lines and hub ports rather than geography: Denmark is here because of Maersk, Singapore and Dubai because a huge share of the world's containers change ship there, and the whole market swung violently when freight rates spiked and then collapsed after 2021.",
  hubs: [],
  notes: {
    SGP: "The busiest transhipment port in the world. Most containers that arrive in Singapore never enter Singapore — they change ship and leave.",
    DEU: "Hapag-Lloyd, and the freight-forwarding industry that organises traffic it does not carry itself.",
    USA: "Air freight and passenger aviation more than sea freight; American carriers are minor in container shipping.",
    ARE: "DP World and Emirates together make Dubai a hub for boxes and for people at the same time.",
    DNK: "Maersk is one of the largest container lines on earth, run from a country of six million.",
    FRA: "CMA CGM, based in Marseille, went from a small line to one of the top three in about twenty years.",
    CHN: "COSCO, plus the sheer volume of freight leaving Chinese ports.",
    NLD: "Rotterdam, Europe's largest port, and the inland barge network behind it.",
    GBR: "Aviation and shipping services rather than ports — Britain's container traffic is modest for its size.",
    KOR: "HMM, rebuilt by the state after the collapse of Hanjin in 2016 left cargo stranded at sea worldwide.",
    HKG: "Once the busiest container port on earth, now well down the list as mainland ports overtook it.",
    GRC: "Greek owners control one of the largest merchant fleets in the world, though the ships mostly fly other countries' flags.",
    TUR: "A land bridge between Europe and Asia, and a large road haulage industry."
  }
},
{
  id: "insfin", name: "Finance & Insurance", emoji: "🏦",
  hs: "BoP services · finance", unit: "financial + insurance", color: "#7fd97f", group: "Services",
  blurb: "The most concentrated services market here, and the one where small places punch hardest. Luxembourg, with 670,000 people, is third in the world because it administers a large share of Europe's investment funds. The pattern is regulatory rather than geographic: money is booked where the rules and the tax treaties suit it.",
  hubs: ["LUX", "IRL"],
  notes: {
    USA: "Investment banking and asset management. More than a fifth of the world total, and the largest single component of the American services surplus.",
    GBR: "The City. Financial services are Britain's largest export sector and produce its biggest trade surplus with nearly every partner it has.",
    LUX: "670,000 people, and third in the world. Luxembourg domiciles investment funds for managers based everywhere else in Europe.",
    DEU: "Large banks with a modest cross-border business relative to the size of the economy.",
    SGP: "Asia's fund and wealth management centre, and the main beneficiary of capital and staff leaving Hong Kong since 2020.",
    FRA: "Insurance more than banking — AXA is one of the largest insurers in the world.",
    IRL: "Fund administration, plus the aircraft leasing finance that sits behind the aircraft market.",
    CHE: "Private banking and reinsurance. Swiss Re is one of the two largest reinsurers on earth, and Zurich one of the largest insurers.",
    HKG: "The traditional gateway to Chinese capital markets, now openly competing with Singapore to keep the role.",
    NLD: "Pension funds, among the largest pools of managed capital per head anywhere.",
    JPN: "Vast domestic savings and a comparatively small cross-border financial services business.",
    CAN: "Banks and pension funds; the Canadian pension plans are among the largest institutional investors in the world."
  }
},
{
  id: "othersvc", name: "Computing & Business Services", emoji: "⌨️",
  hs: "BoP services · other", unit: "IT, consulting, R&D, licensing", color: "#34d3c0", group: "Services",
  blurb: "The largest services category and the least tidy: everything that is not travel, transport or finance. Software, consulting, R&D, legal and engineering work, advertising, call centres and licence fees all sit here. It is also the fastest-growing part of world trade, for the obvious reason that most of it goes down a wire.",
  caveat: "This is defined as a residual — the balance of payments assigns to it whatever is left after travel, transport, insurance and finance. It therefore contains the intellectual property market shown separately on this map, and comparisons with the narrower categories should be made with that in mind.",
  hubs: ["IRL", "NLD"],
  notes: {
    USA: "Consulting, software, engineering and R&D, and the deepest bench of professional services firms anywhere.",
    IRL: "Second in the world, from five million people. Software licensed and research booked in Dublin does most of it — an industry and a tax structure in roughly equal parts.",
    IND: "Bangalore, Hyderabad and Pune. India built this out of nothing after 1991 and it now employs over five million people directly.",
    DEU: "Engineering, industrial design and technical consulting — services sold alongside the machinery.",
    NLD: "Royalties and business services routed through Dutch holding structures rather than performed in the Netherlands.",
    FRA: "Consulting and engineering, and a large advertising industry.",
    CHN: "Growing quickly from a low base; software and business process work rather than the licensing that dominates elsewhere.",
    JPN: "Engineering and technical services attached to its manufacturing exports.",
    GBR: "Law, accountancy, advertising and management consulting — the professional services cluster around London.",
    SGP: "Regional headquarters services for companies operating across Southeast Asia.",
    CHE: "Commodity trading and corporate services alongside the pharmaceutical research.",
    KOR: "Engineering and construction design services sold with its industrial exports.",
    PHL: "The largest voice call-centre industry in the world, having taken that segment from India.",
    ISR: "R&D centres operated in Israel by a large share of the world's technology companies.",
    POL: "Europe's near-shored back office — shared service centres for banks and manufacturers across the continent."
  }
},
{
  id: "royalties", name: "Intellectual Property", emoji: "💡",
  hs: "BoP · IP charges", unit: "licence + royalty receipts", color: "#b98cf0", group: "Services",
  partOf: "othersvc",
  blurb: "Payments for the right to use somebody else's patent, brand, software or film. It is the purest measure of who owns ideas rather than who makes things — and the most distorted, because a licence can be assigned to a subsidiary in a low-tax country and collected there. That is most of why the Netherlands, Switzerland and Ireland stand so far above their size.",
  hubs: ["NLD", "IRL", "CHE", "SGP"],
  notes: {
    USA: "Close to a third of the world's licence income: patents, brands, software and the film and television business.",
    NLD: "Second in the world. Dutch holding companies collect royalties for groups headquartered elsewhere, a structure the OECD tax reforms were written specifically to unwind.",
    JPN: "Automotive and electronics patents, plus a large and fast-growing income from games and characters — Nintendo and Pokémon are a measurable share of it.",
    DEU: "Industrial and automotive patents, licensed to manufacturers building German designs elsewhere.",
    GBR: "Pharmaceutical patents, music publishing and television formats, which are exported far more successfully than the programmes themselves.",
    CHE: "Pharmaceutical patents held in a jurisdiction with an unusually favourable regime for taxing income from them.",
    FRA: "Luxury brand licensing as much as technical patents.",
    SGP: "Regional intellectual property holding for Asian operations, for much the same reasons as the Netherlands.",
    IRL: "Software and pharmaceutical licences, on a scale that has repeatedly distorted Irish national accounts.",
    SWE: "Ericsson's mobile telecoms patents. An unusually large share of one small country's IP income comes from the standards inside every phone.",
    KOR: "Samsung and LG patents, and an entertainment export business that barely existed twenty years ago.",
    CHN: "Rising fast from a very low base — for most of the period covered here China paid out far more in licence fees than it collected."
  }
}
];
