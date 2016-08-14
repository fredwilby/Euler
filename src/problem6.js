
const sumSquares = x => {
  let sum = 0;
  for (let i = 1; i <= x; i++) {
    sum += i * i;
  }

  return sum;
};

const squareSum = x => (x * x * (x + 1) * (x + 1)) / 4;

const diff = x => ((Math.pow(x, 4) / 4) + (Math.pow(x, 3) / 6) - (Math.pow(x, 2) / 4) - (x / 6));

function logTable() {
  console.log('X\t1^2+2^2...+X^2\t(1+2+...+X)^2\tdiff');
  for (let x = 0; x < 10; x++) {
    console.log(`${x}\t${sumSquares(x)}\t\t${squareSum(x)}\t\t${squareSum(x) - sumSquares(x)}\t${diff(x)}`);
  }
}

if (!module.parent) logTable();

export default diff;
