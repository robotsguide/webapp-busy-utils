/**
 * @module Time
 *
 */
import Ember from 'ember';
import { timeSpan, isTimeSpan } from './time-span';
import { assertIsString, assertTest } from 'busy-utils/assert';

/***/
const { get, isArray } = Ember;

/**
 * calculates the total time for the entry
 * based on startTime and endTime
 *
 * @method elapsedTime
 * @params model {Object} required - an Object containing a start and end timestamp
 * @params startKey {String} required - the property name for the start - optional if model is of type TimeSpan
 * @params endKey {String} required - the property name for the end, if end is null current timestamp will be used
 * @params startBounds {Number} - optional, uses startTime if startBounds is null or undefined
 * @params endBounds {Number} - optional, uses endTime if endBounds is null or undefined
 * @return {Number}
 */
export function elapsedTime(model, startKey, endKey, startBounds, endBounds) {
	let total = 0;
	if (isTimeSpan(model)) {
		total = get(model, 'end') - get(model, 'start');
	} else {
		let { start, end } = timeSpan(model, startKey, endKey, startBounds, endBounds);
		total = end - start;
	}
	return total;
}


/**
 * Map an array of objects to an array of timeSpan objects
 *
 * @method timeSpanMap
 * @params itterator {Array} required - an array of Objects containing a start and end timestamp
 * @params startKey {String} required - the property name for the start
 * @params endKey {String} required - the property name for the end, if end is null current timestamp will be used
 * @params startBounds {Number} - optional, uses startTime if startBounds is null or undefined
 * @params endBounds {Number} - optional, uses endTime if endBounds is null or undefined
 * @return {Array}
 */
export function timeSpanMap(itterator, startKey, endKey, startBounds=null, endBounds=null) {
	assertTest(`timeSpanMap(itterator, startKey, endKey, startBounds, endBounds) first argument must be type itterator, you passed ${typeof itterator}`, isArray(itterator));
	assertIsString(startKey);
	assertIsString(endKey);


	// transfoms the array of object into a single aggregated total
	//
	// start by sorting the itterator list
	let spans = itterator.sortBy(startKey);

	// map each object to a simple { start, end } object
	let lastSpan;
	return spans.map(obj => {
		// make sure the span fits within the original time span bounds
		lastSpan = timeSpan(obj, startKey, endKey, startBounds, endBounds, lastSpan);

		// return the span
		return lastSpan;
	});
}

/**
 * Map an array of objects and reduce it to a single elapsedTime
 *
 * @method elapsedTimeMap
 * @params itterator {Array} required - an array of Objects containing a start and end timestamp
 * @params startKey {String} required - the property name for the start
 * @params endKey {String} required - the property name for the end, if end is null current timestamp will be used
 * @params startBounds {Number} - optional, uses startTime if startBounds is null or undefined
 * @params endBounds {Number} - optional, uses endTime if endBounds is null or undefined
 * @return {Number}
 */
export function elapsedTimeMap(itterator, startKey, endKey, startBounds=null, endBounds=null) {
	assertTest(`elapsedTimeMap(itterator, startKey, endKey, startBounds, endBounds) first argument must be type itterator, you passed ${typeof itterator}`, isArray(itterator));
	assertIsString(startKey);
	assertIsString(endKey);

	// get list of time spans
	let spans = timeSpanMap(itterator, startKey, endKey, startBounds, endBounds);

	// reduce time span list to a single elapsed time
	return spans.reduce((a, b) => {
		return a + elapsedTime(b);
	}, 0);
}
