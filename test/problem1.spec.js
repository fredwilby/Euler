import { assert } from 'chai';
import solveProblem from '../src/problem1.js';

describe('problem 1', () => {

  it('finds the sum of numbers below 10 divisible by 3 or 5', () => {
    const solution = solveProblem(10);
    assert(solution === 23, `Solution is incorrect, got ${solution}, not 23`);
  });

  it('finds the sum of numbers below 1000 divisible by 3 or 5', () => {
    const solution = solveProblem(1000);
    assert(solution === 233168, `Solution is incorrect, got ${solution}, not 233168`);
  });

});
