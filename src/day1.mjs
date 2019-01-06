/**
 * https://adventofcode.com/2018/day/1
 */

import { runIfArgs } from './util';

/**
 * Day1, part one solution
 *
 * @param {Array} input array of integers
 * @return {number} sum of all values (solution result)
 */
export const partOne = (input) => input.reduce((sum, nextFrequency) => sum + Number(nextFrequency), 0);

/**
 * Day 1, part two solution
 *
 * @param {Array} input array of integers
 * @return {number} first value seen twice (solution result)
 */
export const partTwo = (input) => {
  let frequency = 0;
  const seenFrequencies = new Set([frequency]);

  for (let i = 0; i < input.length; i++) {
    frequency += Number(input[i]);
    if (seenFrequencies.has(frequency)) {
      break;
    }
    seenFrequencies.add(frequency);
    i = (i === input.length - 1) ? -1 : i;
  }

  return frequency;
};

runIfArgs(partOne, partTwo);