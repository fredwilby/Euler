/**
 * Sums the multiples of mult below the given value.
 */
const sumMultiplesBelow = (mult, below) => {
  const start = below - 1;
  const u = (start - (start % mult)) / mult; // number of multiples below limit
  return mult * u * (u + 1) / 2;
};

export default max => (sumMultiplesBelow(3, max) + sumMultiplesBelow(5, max) - sumMultiplesBelow(15, max));
