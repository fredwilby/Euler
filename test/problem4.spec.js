import { assert } from 'chai';
import problem4, { isPalindrome } from '../src/problem4';

describe('problem 4', () => {
  it('determines palindromes correctly', () => {
    assert.isTrue(isPalindrome(9009), '9009 is a palindrome');
    assert.isTrue(isPalindrome(90309), '90309 is a palindrome');
    assert.isNotTrue(isPalindrome(9120), '9120 is not a palindrome');
  });

  it('finds the largest palindrome number made from the product of 2-digit numbers', () => {
    const solution = problem4(2);
    assert(solution === 9009, `Wrong Solution. Expected 9009, got ${solution}`);
  });

  it('finds the largest palindrome number made from the product of 3-digit numbers', () => {
    const solution = problem4(3);
    assert(solution === 906609, `Wrong Solution. Expected 906609, got ${solution}`);
  });
});
