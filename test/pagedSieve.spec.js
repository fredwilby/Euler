import { assert } from 'chai';
import pagedSieve from '../src/pagedSieve';


describe('pagedSieve', () => {
  it('finds primes from 1 - 100', () => {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31,
      37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

    assert.deepEqual(pagedSieve(100, 100), primes, 'got incorrect first 100 primes');
  });

  it('finds greatest prime less than 100k', function() {
    this.timeout(0);
    const primes = pagedSieve(100000, 100);
    assert(primes[primes.length - 1] === 99991, `last prime was ${primes[primes.length - 1]} not 9973`);
  });

  it('finds the 10001st prime', function() {
    this.timeout(0);
    const primes = pagedSieve(105000, 100);
    assert(primes[10000] === 104743, `10001st primes was ${primes[10000]} not 104743`);
  });
});
