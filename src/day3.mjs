/**
 * https://adventofcode.com/2018/day/3
 */

import { runIfArgs } from './util';

const readClaims = input => input.map((val) => {
  const cols = val.replace(/#|:| @/g, '').split(' ');
  const xy = cols[1].split(',').map(str => Number(str));
  const dimensions = cols[2].split('x').map(str => Number(str));

  return {
    id: cols[0],
    x1: xy[0],
    x2: xy[0] + dimensions[0],
    y1: -xy[1],
    y2: -xy[1] - dimensions[1],
  };
});

const getEdges = (claims) => {
  const minY = claims.reduce((min, next) => (next.y2 < min ? next.y2 : min), 0);
  const maxX = claims.reduce((max, next) => (next.x2 > max ? next.x2 : max), 0);
  return {
    y: minY,
    x: maxX,
  };
};

export const partOne = (input) => {
  const claims = readClaims(input);
  const edges = getEdges(claims);

  // find total width of overlap
  let sum = 0;
  for (let x = 0; x < edges.x; x += 1) {
    for (let y = 0; y > edges.y; y -= 1) {
      const overlaps = claims.filter(c => c.x1 <= x && c.x2 > x && c.y1 >= y && c.y2 < y).length > 1;
      sum = overlaps ? sum + 1 : sum;
    }
  }

  return sum;
};

export const partTwo = (input) => {
  const claims = readClaims(input);
  const edges = getEdges(claims);
  const seen = new Set();

  // find the only non-overlapping claim
  for (let x = 0; x < edges.x; x += 1) {
    for (let y = 0; y > edges.y; y -= 1) {
      claims.filter(c => c.x1 <= x && c.x2 > x && c.y1 >= y && c.y2 < y).forEach((val, _, arr) => {
        if (arr.length > 1) {
          seen.add(val.id);
        }
      });
    }
  }

  // only one result should exist
  return claims.filter(c => !seen.has(c.id)).map(c => c.id)[0];
};

runIfArgs(partOne, partTwo);