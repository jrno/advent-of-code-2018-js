import * as fs from 'fs';

/**
 * Read input from file as array of integers
 */
export const readLinesAsArray = (fileName) => {
  return fs.readFileSync(`/Users/jrno/Projects/personal/advent-of-code-2018-js/src/input/${fileName}`).toString()
    .split("\n")
}