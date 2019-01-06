/**
 * https://adventofcode.com/2018/day/2
 */

import { runIfArgs } from './util';

/**
 * Count how many strings have exactly two or three occurences of a same character.
 * Return the product of these values.
 *
 * @input array of strings (boxIds)
 */
export const partOne = (input) => {
  const [twos, threes] = input.reduce((acc, boxId) => {
    let two = false;
    let three = false;

    // loop through distinct chars only
    new Set(boxId.split('')).forEach((c) => {
      const occurences = boxId.split(c).length - 1;
      two = (occurences === 2) ? true : two;
      three = (occurences === 3) ? true : three;
    });

    return [
      (two) ? acc[0] + 1 : acc[0],
      (three) ? acc[1] + 1 : acc[1],
    ];
  }, [0, 0]);

  return twos * threes;
};

/**
 * Assuming all input strings are equal length strings, find the common characters of two
 * strings that have only one character difference.
 */
export const partTwo = (input) => {
  for (let i = 0; i < input.length; i += 1) {
    for (let d = 0; d < input.length; d += 1) {
      if (i !== d) {
        let nonMatchingCharCount = 0;
        let nonMatchingCharIndex;

        for (let z = 0; z < input[i].length; z += 1) {
          if (input[i].charAt(z) !== input[d].charAt(z)) {
            nonMatchingCharCount += 1;
            nonMatchingCharIndex = z;
          }
        }

        if (nonMatchingCharCount === 1) {
          return input[i].split('')
            .filter((_, x) => x !== nonMatchingCharIndex)
            .join('');
        }
      }
    }
  }

  throw Error('unexpected result, input data should contain exactly one match');
};

runIfArgs(partOne, partTwo);
