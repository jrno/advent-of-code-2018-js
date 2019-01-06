import assert from 'assert';
import { partOne, partTwo } from '../src/day2';
import { readLinesAsArray } from '../src/util';

/* global describe it */
describe('Day 2', () => {
  describe('Part #1', () => {
    it('Simple', () => assert.equal(12, partOne([
      'abcdef',
      'bababc',
      'abbcde',
      'abcccd',
      'aabcdd',
      'abcdee',
      'ababab'])));
    it('Solution', () => assert.equal(6225, partOne(readLinesAsArray('day2.txt'))));
  });
  describe('Part #2', () => {
    it('Simple', () => assert.equal('fgij', partTwo([
      'abcde',
      'fghij',
      'klmno',
      'pqrst',
      'fguij',
      'axcye',
      'wvxyz'])));
    it('Solution', () => assert.equal('revtaubfniyhsgxdoajwkqilp', partTwo(readLinesAsArray('day2.txt'))));
  });
});
