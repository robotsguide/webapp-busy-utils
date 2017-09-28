/**
 * @module Time
 *
 */
import Ember from 'ember';
import { createUnix } from 'busy-utils/time';
import { isUnix } from 'busy-utils/types';
import { assertIsUnix, assertTest } from 'busy-utils/assert';

/***/
const { get, isNone, isArray } = Ember;

/**
 * returns the current unix time if the timestamp
 * passed in is null or undefined
 *
 * @private
 * @method safeTimestamp
 * @params timestamp {Number} - a unix timestamp
 * @returns {Number} a unix timestamp
 */
function safeTimestamp(timestamp, defaultValue) {
	defaultValue = !isNone(defaultValue) ? defaultValue : createUnix();
	return isUnix(timestamp) ? timestamp : defaultValue;
}

function boundSpan(startTime, endTime, startBounds, endBounds) {
	assertIsUnix(startTime);

	// set startBounds to start if a valid startBounds
	// is not passed in
	startBounds = safeTimestamp(startBounds, startTime);

	// set end and endBounds to the current timestamp if
	// they are not valid timestamps
	endTime = safeTimestamp(endTime);
	endBounds = safeTimestamp(endBounds);

	assertIsUnix(startBounds);
	assertIsUnix(endTime);
	assertIsUnix(endBounds);


	// use the greater of start or startBounds;
	let start = Math.max(startTime, startBounds);

	// use the greater of start or startBounds;
	let end = Math.min(endTime, endBounds);

	// remove negative time if the bounds
	// forced it to go negative
	if (start > end) {
		end = start;
	}

	return { start, end, __start: startTime, __end: endTime };
}

/**
 * calculates the total time for the entry
 * based on startTime and endTime
 *
 * @method elapsedTime
 * @params startTime {Number} - required
 * @params endTime {Number} - optional, uses current time if end is null or undefined
 * @params startBounds {Number} - optional, uses startTime if startBounds is null or undefined
 * @params endBounds {Number} - optional, uses endTime if endBounds is null or undefined
 * @return {Number}
 */
export function elapsedTime(startTime, endTime, startBounds, endBounds) {
	let { start, end } = boundSpan(startTime, endTime, startBounds, endBounds);
	return end - start;
}

export function elapsedTimeMap(itterator, startKey, endKey, startBounds, endBounds) {
	assertTest(`mapSpan(itterator, startKey, endKey, startBounds, endBounds) first argument must be type itterator, you passed ${typeof itterator}`, isArray(itterator));

	let lastSpan;

	// transfoms the array of object into a single aggregated total
	//
	// start by sorting the itterator list
	let total = itterator.sortBy(startKey);

	// map each object to a simple { start, end } object
	total = total.map(obj => {
		let startTime = get(obj, startKey);
		let endTime = get(obj, endKey);

		// last span keeps track of the span before the current span
		// this previous span will be used to adjust the start time
		// for the current span according to the end of the previous
		// span
		if (lastSpan) {
			let { start } = boundSpan(startTime, null, get(lastSpan, 'end'));
			startTime = start;
		}

		// make sure the span fits within the original time span bounds
		let span = boundSpan(startTime, endTime, startBounds, endBounds);

		// save this span as the new last span
		lastSpan = span;

		// return the span
		return span;
	});

	total = total.reduce((a, b) => a + elapsedTime(b.start, b.end), 0);

	return total;
}
