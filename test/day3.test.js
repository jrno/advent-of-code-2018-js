import assert from 'assert';
import { partOne, partTwo } from '../src/day3';
import { readLinesAsArray } from '../src/util.mjs';

describe('Day 3', function() {
  describe('Part #1', function() {
    this.timeout(10000);
    it('Simple', () => assert.equal(4, partOne([
      '#1 @ 1,3: 4x4',
      '#2 @ 3,1: 4x4',
      '#3 @ 5,5: 2x2'])
      )
    );
    it('Solution', () => assert.equal(107820, partOne(readLinesAsArray("day3.txt"))));
  });

  describe('Part #2', function() {
    this.timeout(10000);
    it('Simple', () => assert.equal('3', partTwo([
      '#1 @ 1,3: 4x4',
      '#2 @ 3,1: 4x4',
      '#3 @ 5,5: 2x2'])
      )
    );
    it('Solution', () => assert.equal('661', partTwo(readLinesAsArray("day3.txt"))));
  });
});