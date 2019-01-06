import assert from 'assert';
import { partOne, partTwo } from '../src/day4';
import { readLinesAsArray } from '../src/util';

const getSimpleInput = () => {
  return ["[1518-11-01 00:00] Guard #10 begins shift",
    "[1518-11-01 00:05] falls asleep",
    "[1518-11-01 00:25] wakes up",
    "[1518-11-01 00:30] falls asleep",
    "[1518-11-01 00:55] wakes up",
    "[1518-11-01 23:58] Guard #99 begins shift",
    "[1518-11-02 00:40] falls asleep",
    "[1518-11-02 00:50] wakes up",
    "[1518-11-03 00:05] Guard #10 begins shift",
    "[1518-11-03 00:24] falls asleep",
    "[1518-11-03 00:29] wakes up",
    "[1518-11-04 00:02] Guard #99 begins shift",
    "[1518-11-04 00:36] falls asleep",
    "[1518-11-04 00:46] wakes up",
    "[1518-11-05 00:03] Guard #99 begins shift",
    "[1518-11-05 00:45] falls asleep",
    "[1518-11-05 00:55] wakes up"]
}

describe('Day 4', function() {
  describe('Part #1', function() {
    it('Simple', () => assert.equal(240, partOne(getSimpleInput()))) // 10 * 24 
    it('Solution', () => assert.equal(151754, partOne(readLinesAsArray('day4.txt'))));
  });
  describe('Part #2', () => {
    it('Simple', () => assert.equal(4455, partTwo(getSimpleInput()))) // 99 * 45
    it('Solution', () => assert.equal(19896, partTwo(readLinesAsArray('day4.txt'))));
  });
});