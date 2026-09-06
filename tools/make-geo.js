// Build a compact geometry payload from Natural Earth 50m admin-0 countries.
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');

const src = JSON.parse(fs.readFileSync(path.join(root, 'build', 'raw', 'ne50m.geojson'), 'utf8'));

// --- Natural Earth I projection (same polynomial d3-geo uses) -------------
const RAD = Math.PI / 180;
function project(lon, lat) {
  const lam = lon * RAD, phi = lat * RAD;
  const p2 = phi * phi, p4 = p2 * p2;
  return [
    lam * (0.8707 - 0.131979 * p2 + p4 * (-0.013791 + p4 * (0.003971 * p2 - 0.001529 * p4))),
    phi * (1.007226 + p2 * (0.015085 + p4 * (-0.044475 + 0.028874 * p2 - 0.005916 * p4)))
  ];
}

// --- Douglas-Peucker on projected points ---------------------------------
function segDist2(p, a, b) {
  let x = a[0], y = a[1], dx = b[0] - x, dy = b[1] - y;
  if (dx || dy) {
    const t = ((p[0] - x) * dx + (p[1] - y) * dy) / (dx * dx + dy * dy);
    if (t > 1) { x = b[0]; y = b[1]; }
    else if (t > 0) { x += dx * t; y += dy * t; }
  }
  dx = p[0] - x; dy = p[1] - y;
  return dx * dx + dy * dy;
}
function simplify(pts, tol) {
  if (pts.length <= 4) return pts;
  const t2 = tol * tol, keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [lo, hi] = stack.pop();
    let idx = -1, best = t2;
    for (let i = lo + 1; i < hi; i++) {
      const d = segDist2(pts[i], pts[lo], pts[hi]);
      if (d > best) { best = d; idx = i; }
    }
    if (idx > 0) { keep[idx] = 1; stack.push([lo, idx], [idx, hi]); }
  }
  return pts.filter((_, i) => keep[i]);
}

function ringArea(r) {
  let a = 0;
  for (let i = 0, j = r.length - 1; i < r.length; j = i++) a += r[j][0] * r[i][1] - r[i][0] * r[j][1];
  return a / 2;
}
function ringCentroid(r) {
  let x = 0, y = 0, a = 0;
  for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
    const f = r[j][0] * r[i][1] - r[i][0] * r[j][1];
    a += f; x += (r[j][0] + r[i][0]) * f; y += (r[j][1] + r[i][1]) * f;
  }
  a *= 3;
  return a ? [x / a, y / a] : r[0];
}

const SKIP = new Set(['ATA']); // Antarctica: no trade, eats a third of the canvas
const out = [];
let ptsIn = 0, ptsOut = 0;

for (const f of src.features) {
  const p = f.properties;
  let iso = p.ISO_A3_EH && p.ISO_A3_EH !== '-99' ? p.ISO_A3_EH : p.ISO_A3;
  if (!iso || iso === '-99') iso = 'X' + (p.ADM0_A3 || p.NAME).slice(0, 2).toUpperCase();
  if (SKIP.has(iso)) continue;

  const polys = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates;
  // Project every ring, then rank by projected area so we can prune specks.
  const rings = [];
  for (const poly of polys) {
    for (let ri = 0; ri < poly.length; ri++) {
      const raw = poly[ri];
      ptsIn += raw.length;
      const proj = raw.map(c => project(c[0], c[1]));
      rings.push({ proj, area: Math.abs(ringArea(proj)), hole: ri > 0 });
    }
  }
  rings.sort((a, b) => b.area - a.area);
  const biggest = rings[0];
  // Keep anything that is at least 0.4% of the country's main landmass, and
  // always keep the main landmass itself however small the country is.
  const kept = rings.filter((r, i) => i === 0 || r.area > biggest.area * 0.004);

  // Small countries need finer detail or they collapse into a triangle.
  const tol = biggest.area > 0.02 ? 0.0018 : biggest.area > 0.001 ? 0.0009 : 0.00025;

  const shapes = [];
  for (const r of kept) {
    const s = simplify(r.proj, tol);
    if (s.length < 4) continue;
    ptsOut += s.length;
    shapes.push(s.map(c => [Math.round(c[0] * 1e4), Math.round(c[1] * 1e4)]));
  }
  if (!shapes.length) continue;

  const c = ringCentroid(biggest.proj);
  out.push({
    id: iso,
    name: p.NAME_EN || p.NAME,
    region: p.SUBREGION || p.CONTINENT,
    cx: Math.round(c[0] * 1e4),
    cy: Math.round(c[1] * 1e4),
    area: biggest.area,
    shapes
  });
}

// Natural Earth splits a few dependencies out under their parent's ISO code
// (e.g. Australian Indian Ocean Territories -> AUS). Fold them together.
const merged = new Map();
for (const c of out) {
  const prev = merged.get(c.id);
  if (!prev) { merged.set(c.id, c); continue; }
  prev.shapes.push(...c.shapes);
  if (c.area > prev.area) { prev.area = c.area; prev.cx = c.cx; prev.cy = c.cy; prev.name = c.name; }
}
const list = [...merged.values()].sort((a, b) => a.id.localeCompare(b.id));
// Below this projected area a country is a sub-pixel speck at world zoom and
// needs a marker dot to be findable at all.
for (const c of list) { if (c.area < 0.0004) c.tiny = 1; delete c.area; }
out.length = 0; out.push(...list);
console.log('countries', out.length, '| points', ptsIn, '->', ptsOut);
console.log('marker-dot countries:', out.filter(c => c.tiny).length);
fs.writeFileSync(path.join(root, 'data', 'geo.json'), JSON.stringify(out));
console.log('data/geo.json', (fs.statSync(path.join(root, 'data', 'geo.json')).size / 1024).toFixed(0) + ' KB');
