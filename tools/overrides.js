// Explicit, documented departures from "use what the country reported".
//
// Everything here is a case where a country's own filing is demonstrably wrong
// for the HS code in question, not merely surprising. Each entry names the
// evidence. Nothing is adjusted for looking odd.

module.exports = {
  // market/ISO3 -> use the mirror figure (what everyone else reports importing
  // from that country) in preference to the country's own filing.
  forceMirror: {
    'aircraft/USA':
      'The United States files $4.1bn of HS 8802 exports for 2023 while the rest ' +
      'of the world reports importing $38.5bn of aircraft from it — a ninefold gap. ' +
      'US aircraft exports are largely captured outside this heading in the Census ' +
      'filing, so the mirror is the only usable figure.'
  }
};
