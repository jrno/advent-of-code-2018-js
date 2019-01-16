import assert from 'assert';
import { partOne, partTwo } from '../src/day5';
import { readAsString } from '../src/util';

describe('Day 5', function() {
  describe('Part #1', function() {
    it('Simple', () => assert.equal(10, partOne("dabAcCaCBAcCcaDA")));
    it('Solution', () => assert.equal(11264, partOne(readAsString('day5.txt'))));
  });
});