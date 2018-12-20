/**
 * Advent of code 2018 - Day 1
 * 
 * https://adventofcode.com/2018/day/1
 */

import {readLinesAsArray} from './util';

/**
 * Assuming input is an array of integers count the sum of all
 */
export const partOne = (input) => input.reduce((sum, nextFrequency) => sum + nextFrequency, 0); 

/** 
 * Assuming input is an array of integers find the first frequency value 
 * that is seen twice. 
 */
export const partTwo = (input) => {

  let frequency = 0;
  const seenFrequencies = new Set([frequency]);

  for (let i = 0; i < input.length; i++) {
    frequency += input[i];
    if (seenFrequencies.has(frequency)) {
      break;
    }
    seenFrequencies.add(frequency);
    i = (i === input.length-1) ? -1 : i; 
  }

  return frequency;
}

const args = process.argv.slice(2);
if (args.length === 1) {
  console.log("Part 1: " + partOne(readLinesAsArray(args[0])));
  console.log("Part 2: " + partTwo(readLinesAsArray(args[0]))); 
}

