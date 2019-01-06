/**
 * https://adventofcode.com/2018/day/4
 */

import { runIfArgs } from './util';

const REGEX_TIMESTAMP = /\[(.*)\]/;
const REGEX_MSG = /\](.*)/;

const EVENTS = Object.freeze({
  START: Symbol('start'),
  AWAKE: Symbol('awake'),
  ASLEEP: Symbol('asleep')
});

/**
 * Transform event string (input line) to event object
 */
const parseEvent = (event) => {

  const date = new Date(event.match(REGEX_TIMESTAMP)[1].trim());
  const msg = event.match(REGEX_MSG)[1].trim();
  let type = undefined;
  let id = undefined;

  if (msg === 'falls asleep') {
    type = EVENTS.ASLEEP;  
  } else if (msg === 'wakes up') {
    type = EVENTS.AWAKE
  } else if (msg.endsWith('begins shift')) {
    type = EVENTS.START;
    id = msg.replace(/\D/g, '') // only digit should be the guard id
  } else {
    throw Error(`unknown event in daily event stream ${event}`)
  }

  return {
    id: id,
    type: type,
    date: date,
    min: date.getHours() == 0 ? date.getMinutes() : 0, // minutes not in the midnight hour are irrelevant
  }
}

/**
 * Create time range object with guardId, start and end minutes and status of the range (sleep|awake)
 */
const timeRange = (id, start, end, activity) => {
  return {
    id: id,
    start: start,
    end: end,
    minutes: (end - start) + 1, // total minutes inclusive
    activity: activity
  }   
}

/**
 * Transform event strings as time ranges identifying the guard, range start/end and activity 
 */
const createRanges = (input) => {

    // parse input as events and sort chronologically
    const events = input
      .map(parseEvent)
      .sort((a,b) => a.date - b.date);

    // transform events as time ranges where each range 
    // holds the guard id, range start and end minutes and range type (sleep or awake)
    return events
      .map((event, index) => event.type === EVENTS.START ? index : -1)
      .filter(index => index >= 0)
      .map((shiftIndex, i, shiftIndexes) => (shiftIndexes[i + 1] < events.length ? events.slice(shiftIndex, shiftIndexes[i + 1]) : events.slice(shiftIndex)))
      .reduce((ranges, dailyEvents) => {

        const start = dailyEvents.shift(); // first event is the 'START' event
        const rangesForGuard = [];
        let nextType = EVENTS.AWAKE;
        let nextMinute = start.min;

        dailyEvents.forEach((event) => {
          rangesForGuard.push(timeRange(start.id, nextMinute, event.min-1, nextType))
          nextMinute = event.min;
          nextType = event.type;
        });
        
        // add the last range
        if (nextMinute < 59) {
          rangesForGuard.push(timeRange(start.id, nextMinute, 59, nextType))  
        }

        return ranges.concat(rangesForGuard);

      }, []);
}

/**
 * Returns the object key that has largest value (> comparison)
 */
const propWithGreatestValue = (obj) => {
  return Object.keys(obj).reduce((prev, curr) => obj[curr] > obj[prev] ? curr : prev);
}

/**
 * Find the guard that is most minutes asleep, return result as guardId * the most common minute the guard was asleep
 */
export const partOne = (input) => {
  const timeRanges = createRanges(input);
  const timeAsleepByGuard = timeRanges
    .filter(r => r.activity === EVENTS.ASLEEP)
    .reduce((result, range) => {
      result[range.id] = (result[range.id] ? result[range.id] : 0) + range.minutes;
      return result; 
    }, {});

  const guardSleepingMost = propWithGreatestValue(timeAsleepByGuard);
  const timeAsleepByMinute = timeRanges
    .filter(r => r.id == guardSleepingMost && r.activity === EVENTS.ASLEEP)
    .reduce((result, range) => {
      for (let minute = range.start; minute <= range.end; ++minute) {
        result[minute] = result[minute] === undefined ? 1 : (result[minute] + 1);   
      }
      return result;
    }, {});

  const minuteWithMostSleep = propWithGreatestValue(timeAsleepByMinute);
  return minuteWithMostSleep * guardSleepingMost;
};

/**
 * Of all guards, which guard is most frequently asleep on the same minute?
 */
export const partTwo = (input) => {
  const timeRanges = createRanges(input);
  const timeAsleepByGuardWithMinutes = timeRanges
  .filter(r => r.activity === EVENTS.ASLEEP)
  .reduce((result, range) => {
    if (result[range.id] === undefined) {
      result[range.id] = {};
    }
    for (let i = range.start; i <= range.end; ++i) {
      result[range.id][i] = result[range.id][i] === undefined ? 1 : (result[range.id][i] + 1);   
    }
    return result;
  }, {});

  const mostFrequentlyAsleep = Object.keys(timeAsleepByGuardWithMinutes).reduce((currentBest, id) => {
    const minute = propWithGreatestValue(timeAsleepByGuardWithMinutes[id]);
    const count = timeAsleepByGuardWithMinutes[id][minute];
    return count > currentBest.count ? { id: id, minute: minute, count: count} : currentBest;
  }, { id: undefined, minute: 0, count: 0 });

  return mostFrequentlyAsleep.id * mostFrequentlyAsleep.minute;
}

runIfArgs(partOne, partTwo);