
const sumStr = str => {
  let sum = 0;
  for (let c = 0; c < str.length; c++) {
    sum += parseInt(str.charAt(c), 10);
  }

  return sum;
};

export default (numberString, n) => {
  let parts = numberString.split('0')
    .filter(el => el.length >= n)
    .map(el => ({ part: el, sum: sumStr(el) }));

  parts.sort((a, b) => b.sum - a.sum);
  parts = parts.map(el => el.part);

  let max = 0;

  for (const part of parts) {
    for (let c = 0; c <= part.length - n; c++) {
      let prod = 1;
      for (let i = c; i < c + n; i++) {
        prod *= parseInt(part.charAt(i), 10);
      }
      if (prod > max) max = prod;
    }
  }

  return max;
};
