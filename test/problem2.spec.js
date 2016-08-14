import { assert } from 'chai';
import solveProblem from '../src/problem2.js';

describe('problem 2', () => {

  it('finds the sum of even fibbonacci numbers below 100', () => {
    const solution = solveProblem(100);
    assert(solution === 44, `Solution is incorrect, got ${solution}, not 44`);
  });

  it('finds the sum of even fibbonacci numbers below 4 million', () => {
    const solution = solveProblem(4000000);
    assert(solution === 4613732, `Solution is incorrect, got ${solution}, not 233168`);
  });

});
