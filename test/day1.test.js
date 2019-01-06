/**
 * Advent of code 2018 - Day 1
 *
 * https://adventofcode.com/2018/day/1
 */

import assert from 'assert';
import { partOne, partTwo } from '../src/day1';
import { readLinesAsArray } from '../src/util.mjs';

/* global describe it */
describe('Part #1', () => {
  describe('Simple', () => {
    it('should return 3 for [1, 1, 1]', () => assert.equal(3, partOne([1, 1, 1])));
    it('should return 0 for [1, 1, -2]', () => assert.equal(0, partOne([1, 1, -2])));
    it('should return -6 for [-1, -2, -3]', () => assert.equal(-6, partOne([-1, -2, -3])));
  })
  describe('Solution', () => assert.equal(522, partOne(readLinesAsArray('day1.txt'))));
});

describe('Part #2', () => {
  it('[1, -1] reaches 0 zirst', () => assert.equal(0, partTwo([1, -1])));
  it('[3, 3, 4, -2, -4] reaches 3 first', () => assert.equal(10, partTwo([3, 3, 4, -2, -4])));
  it('[-6, 3, 8, 5, -6] reaches 5 first', () => assert.equal(5, partTwo([-6, 3, 8, 5, -6])));
  it('[+7, +7, -2, -7, -4] reaches 14 first', () => assert.equal(14, partTwo([7, 7, -2, -7, -4])));
});
