
import { runIfArgsStr } from './util';

const sameChar = (a,b) => a.toUpperCase() === b.toUpperCase();

const differentCharacterPoint = (a,b) => a.charCodeAt(0) !== b.charCodeAt(0);

const reacts = (a, b) => {
  return sameChar(a,b) && differentCharacterPoint(a,b);
};

export const partOne = (input) => {

  let polymer = input.split('');
  let reactions = true;

  while (reactions) {
    const mergeIndexes = new Set();
    for (let i = 0; i < polymer.length - 1; ++i) {
      if (reacts(polymer[i], polymer[i+1])) {
        mergeIndexes.add(i);
        mergeIndexes.add(i+1);
        while (sameChar(polymer[i], polymer[i+1]) && i < polymer.length) {
          i += 1;
        }
      }
    } 
 
    reactions = mergeIndexes.size > 0;
    if (reactions) {
      polymer = polymer.filter((_, idx) => !mergeIndexes.has(idx));
    }
  }

  return polymer.length;
};

export const partTwo = () => {
  console.log("part #2");
};

runIfArgsStr(partOne);