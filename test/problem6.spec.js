import { assert } from 'chai';
import problem6 from '../src/problem6';

describe('problem 6', () => {
  it('finds the difference between the sum of the squares of the first ten natural numbers and the square of the sum', () => {
    const solution = problem6(10);
    assert(solution === 2640, `Wrong Solution. Expected 2640, got ${solution}`);
  });

  it('finds the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum', () => {
    const solution = problem6(100);
    assert(solution === 25164150, `Wrong Solution. Expected 25164150, got ${solution}`);
  });
});
