export const getPrimesBelow = n => {
  const sieve = new Array(n);
  const primes = [];

  for (let q = 2; q < n; q++) {
    if (!sieve[q]) primes.push(q);
    else continue;

    for (let i = q; i < n; i += q) {
      sieve[i] = true;
    }
  }

  return primes;
};

/**
 * A number gpf is either < its sqrt or all of its other prime factors are.
 * Currently works for sqrt(n)-smooth numbers but code for general case is sketched below
 */
const greatestPrimeFactor = i => {
  const primes = getPrimesBelow(Math.ceil(Math.sqrt(i)));
  for (let p = primes.length - 1; p >= 0; p--) {
    if (i % primes[p] === 0) return primes[p];
  } // TODO Check if Prod ( factorizeBelow(i, sqrt(i)) ) = i else, do below

  const factors = primes.filter(el => i % el === 0);
  let res = i;
  for (const factor of factors) {
    while (factor % res === 0) {
      res /= factor;
    }
  }

  return res;
};

export default greatestPrimeFactor;

/**
 * Returns a list of the prime factor of a number
 */
const primeFactors = i => getPrimesBelow(i + 1).filter(el => i % el === 0);

/**
 * Returns a number's prime factorization in the format { factor: power }
 */
const factorization = i => {
  const factors = primeFactors(i);
  const res = {};
  let c = i;
  while (c > 1) {
    for (const factor of factors) {
      if (c % factor === 0) {
        if (res[factor]) res[factor]++;
        else res[factor] = 1;
        c /= factor;
      }
    }
  }

  return res;
};

/**
 * Calculates the 'union' of prime factors below max and returns their product.
 */
export const problem5 = max => {
  const factors = {};
  for (let i = 0; i < max; i++) {
    const f = factorization(i + 1);
    Object.entries(f).forEach(el => {
      if (!factors[el[0]] || factors[el[0]] < el[1]) {
        factors[el[0]] = el[1];
      }
    });
  }

  return Object.entries(factors)
    .reduce((a, b) => [Math.pow(a[0], a[1]) * Math.pow(b[0], b[1]), 1])[0];
};
