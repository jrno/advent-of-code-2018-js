import assert from 'assert';
import {partOne, partTwo} from '../src/day2';
import { readLinesAsArray } from '../src/util.mjs';

describe('Day 2', () => {
  describe('Part #1', () => {
    it('Simple test', () => assert.equal(12, partOne([
      'abcdef', 
      'bababc', 
      'abbcde', 
      'abcccd', 
      'aabcdd', 
      'abcdee', 
      'ababab'])
      )
    );
    it('Test solution', () => assert.equal(6225, partOne(readLinesAsArray("day2.txt"))));
  });
  describe('Part #2', () => {
    it('Simple test', () => assert.equal('fgij', partTwo([
      'abcde', 
      'fghij', 
      'klmno', 
      'pqrst', 
      'fguij', 
      'axcye', 
      'wvxyz'])
      )
    );
    it('Test solution', () => assert.equal('revtaubfniyhsgxdoajwkqilp', partTwo(readLinesAsArray("day2.txt"))))  
  });
});