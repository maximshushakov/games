export const intersect = (p0, p1, p2, p3, ray) => {
  const A1 = p1.y - p0.y;
  const B1 = p0.x - p1.x;
  const C1 = A1 * p0.x + B1 * p0.y;
  const A2 = p3.y - p2.y;
  const B2 = p2.x - p3.x;
  const C2 = A2 * p2.x + B2 * p2.y;
  const denominator = A1 * B2 - A2 * B1;

  if (denominator === 0) {
    return null;
  }

  const intersetX = (B2 * C1 - B1 * C2) / denominator;
  const intersetY = (A1 * C2 - A2 * C1) / denominator;
  const rx0 = (intersetX - p0.x) / (p1.x - p0.x);
  const ry0 = (intersetY - p0.y) / (p1.y - p0.y);
  const rx1 = (intersetX - p2.x) / (p3.x - p2.x);
  const ry1 = (intersetY - p2.y) / (p3.y - p2.y);

  if (ray) {
    return { x: intersetX, y: intersetY }
  }

  if (((rx0 >= 0 && rx0 <= 1) || (ry0 >= 0 && ry0 <= 1)) &&
      ((rx1 >= 0 && rx1 <= 1) || (ry1 >= 0 && ry1 <= 1))) {
    return { x: intersetX, y: intersetY }
  }
};