

export default (x, pageSize = 100) => {

  const primes = [];

  const getPageIndex = q => q % pageSize;
  const closestMultiple = (q, m) => (q % m === 0 ? q : q + m - (q % m));

  for (let i = 0; i < x; i += pageSize) {
    const page = new Array(pageSize);

    for (const prime of primes) {
      let start = closestMultiple(i, prime);
      while (start < i + pageSize) {
        page[getPageIndex(start)] = true;
        start += prime;
      }
    }

    for (let j = i; j < i + pageSize; j++) {
      if (j > 1 && !page[getPageIndex(j)]) {
        primes.push(j);
        for (const prime of primes) {
          let start = closestMultiple(i, prime);
          while (start < i + pageSize) {
            page[getPageIndex(start)] = true;
            start += prime;
          }
        }
      }
    }
  }

  return primes;
};
