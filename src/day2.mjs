
import {readLinesAsArray} from './util';

/** 
 * Count how many strings have exactly two or three occurences of a same character. 
 * Return the product of these values.
 * 
 * @input array of strings (boxIds)
 */
export const partOne = (input) => {

  const res = input.reduce((acc, boxId) => {

    let exactlyTwoSame = false;
    let exactlyThreeSame = false;
    
    // find distinct chars in string and count occurences
    new Set(boxId.split('')).forEach((c) => {
      const occurences = boxId.split(c).length - 1;
      exactlyTwoSame = (occurences === 2) ? true : exactlyTwoSame;
      exactlyThreeSame = (occurences === 3) ? true : exactlyThreeSame;
    });

    return {
      countExactTwos: (exactlyTwoSame) ? acc.countExactTwos+1 : acc.countExactTwos,
      countExactThrees: (exactlyThreeSame) ? acc.countExactThrees+1 : acc.countExactThrees
    }
  }, {
    countExactTwos: 0, 
    countExactThrees: 0
  });

  return res.countExactTwos * res.countExactThrees;
}

/**
 * Assuming all input strings are equal length strings, find the common characters of two 
 * strings that have only one character difference.
 */
export const partTwo = (input) => {
  
  for (let i = 0; i < input.length; ++i) { 
    for (var d = 0; d < input.length; ++d) { 
      if (i !== d) {

        let nonMatchingCharCount = 0;
        let nonMatchingCharIndex = undefined;

        for (var z = 0; z < input[i].length; ++z) {
          if (input[i].charAt(z) !== input[d].charAt(z)) {
            nonMatchingCharCount += 1;
            nonMatchingCharIndex = z;
          }
        }

        if (nonMatchingCharCount === 1) {
          return input[i].split('')
          .filter((val, i) => i !== nonMatchingCharIndex)
          .join('');
        }
      }
    }
  }
}

const args = process.argv.slice(2);
if (args.length === 1) {
  console.log(partOne(readLinesAsArray(args[0])));
  console.log(partTwo(readLinesAsArray(args[0]))); 
}
