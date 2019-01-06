import * as fs from 'fs';

/**
 * Read lines in file as array of strings
 */
export const readLinesAsArray = (fileName) => {
  // TODO: no absolute paths
  return fs.readFileSync(`/Users/jrno/Projects/personal/advent-of-code-2018-js/src/input/${fileName}`).toString()
    .split("\n")
}

/**
 * Run given solutions (=functions) with argument data if present
 */
export const runIfArgs = (...solutions) => {
  const args = process.argv.slice(2);
  if (args.length === 1) {
    const data = readLinesAsArray(args[0]);
    solutions.forEach((solution) => console.log(`${solution.name} : ${solution(data)}`));
  }
} 