
const fibb = n => {
  if (n === 0) return 1;
  if (n === 1) return 2;

  return fibb(n - 1) + fibb(n - 2);
};

const memoize = fn => {
  const mem = {};

  return n => {
    if (n in mem) {
      return mem[n];
    }

    mem[n] = fn(n);
    return mem[n];
  };
};

const memFib = memoize(fibb);

export default max => {
  let last = 0;
  let sum = 0;
  let n = 1;

  while(last < max) {
    sum += last;
    last = memFib(n);
    n += 3;
  }

  return sum;
};
