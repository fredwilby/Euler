import { assert } from 'chai';
import { problem5 } from '../src/problem3';

describe('problem 5', () => {
  it('finds the smallest number divisible by 1-10', () => {
    const solution = problem5(10);
    assert(solution === 2520, `Wrong Solution. Expected 2520, got ${solution}`);
  });

  it('finds the smallest number dibisible by 1-20', () => {
    const solution = problem5(20);
    assert(solution === 232792560, `Wrong Solution. Expected 232792560, got ${solution}`);
  });
});
