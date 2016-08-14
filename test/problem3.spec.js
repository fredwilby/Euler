import { assert } from 'chai';
import solveProblem, { getPrimesBelow } from '../src/problem3.js';

describe('problem 3', () => {
  it('finds primes below 25', () => {
    const solution = getPrimesBelow(25);
    const actual = [2, 3, 5, 7, 11, 13, 17, 19, 23];
    for (let s = 0; s < solution.length; s++) {
      assert(solution[s] === actual[s], `position ${s} should be ${actual[s]}, got ${solution[s]}`);
    }
  });

  it('finds the greatest prime factor of 13195', () => {
    const solution = solveProblem(13195);
    assert(solution === 29, `Solution is incorrect, got ${solution}, not 29`);
  });

  it('finds the greatest prime factor of 600851475143', () => {
    const solution = solveProblem(600851475143);
    assert(solution === 6857, `Solution is incorrect, got ${solution}, not 6857`);
  });

});
