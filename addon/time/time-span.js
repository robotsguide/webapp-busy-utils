/**
 * @module Time
 *
 */
import Ember from 'ember';
import { createUnix } from 'busy-utils/time';
import { isUnix } from 'busy-utils/types';
import { assertIsUnix, assertIsObject, assertIsArray, assertIsString } from 'busy-utils/assert';

/***/
const { get, set, isNone, isEmpty, getOwner, merge } = Ember;
const EmberObject = Ember.Object;

/**
 * @class TimeSpan
 *
 */
const TimeSpan = EmberObject.extend({
	entryId: null,
	entryType: null,

	start: null,
	end: null,

	invalidStart: false,
	invalidEnd: false,
	invalidEntry: false,
	overlapping: false,

	__start: null,
	__end: null,
	__startBounds: null,
	__endBounds: null,

	__predecessor: null,

	__copy() {
		let _copy = merge({}, this);
		return TimeSpan.create(_copy);
	}
});

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

function timeSpanAttr(property) {
	return isEmpty(property) ? '__timespan' : `__timespan.${property}`;
}

function createTimsSpan(model, options) {
	options.entryId = get(model, 'id');
	options.entryType = get(model, 'modelName') || get(model, '_internalModel.modelName');

	const owner = getOwner(model);
	let span = TimeSpan.create(owner.ownerInjection(), options);

	set(model, timeSpanAttr(), span);

	return span;
}

function isEqualCheck(a, b) {
	return function(prop) {
		return get(a, prop) === get(b, prop);
	}
}

function setOptions(span, options={}, changed=[]) {
	assertIsObject(span);
	assertIsObject(options);
	assertIsArray(changed);

	changed.forEach(key => set(span, key, get(options, key)));
}

function changedProperties(original, changes) {
	assertIsObject(original);
	assertIsObject(changes);

	let isEqual = isEqualCheck(original, changes);
	let attrs = Object.keys(changes);

	return attrs.filter(key => !isEqual(key));
}

function updateTimeSpan(span, options) {
	assertIsObject(span);
	assertIsObject(options);

	setOptions(span, options, changedProperties(span, options));
	return span;
}

function hasTimeSpan(model) {
	return !isNone(get(model, '__timespan'));
}

/**
 * Check if instance is a TimeSpan instance
 *
 * @public
 * @method isTimeSpan
 * @params value {Mixed}
 * @return {Boolean}
 */
export function isTimeSpan(value) {
	return value instanceof TimeSpan;
}

/**
 * Generates a normalized Object that represents the Object as TimeSpan Object with:
 *		`start`			startTime adjusted according to startBounds
 *		`end`				endTime adjusted according to endBounds
 *		`__start`		original startTime
 *		`__end`			original endTime
 *
 * @method getTimeSpan
 * @params model {Object} required - an Object containing a start and end timestamp
 * @params startKey {String} required - the property name for the start
 * @params endKey {String} required - the property name for the end, if end is null current timestamp will be used
 * @params __startBounds {Number} optional - uses startTime if startBounds is null or undefined
 * @params __endBounds {Number} optional - uses endTime if endBounds is null or undefined
 * @return {Object}
 */
export function timeSpan(model, startKey, endKey, startBounds=null, endBounds=null, predecessor=null) {
	assertIsObject(model);
	assertIsString(startKey);
	assertIsString(endKey);

	// save orignal start and end values
	let __start = get(model, startKey);
	let __end = get(model, endKey);
	let __startBounds = startBounds;
	let __endBounds = endBounds;
	let __predecessor = predecessor;
	let start = __start;
	let end = __end;

	assertIsUnix(start);

	// set startBounds to start if its not a valid timestamp
	startBounds = safeTimestamp(startBounds, start);
	assertIsUnix(startBounds);

	// set end to `now` if its not a valid timestamp
	end = safeTimestamp(end);
	assertIsUnix(end);

	// set endBounds to end if its not a valid timestamp
	endBounds = safeTimestamp(endBounds, end);
	assertIsUnix(endBounds);

	let span = get(model, timeSpanAttr());
	if (!hasTimeSpan(model)) {
		span = createTimsSpan(model, { start, end, __start, __end, __startBounds, __endBounds, __predecessor });
	}

	if (isNone(predecessor)) {
		predecessor = get(span, '__predecessor') || {};
	}

	// set predecessorEnd to endBounds if its not a valid timestamp
	let predecessorEnd = safeTimestamp(get(predecessor, 'end'), startBounds);
	assertIsUnix(predecessorEnd);

	// use the greater of start or startBounds;
	start = Math.max(start, startBounds);
	let invalidStart = start === startBounds;

	// use the lesser of start or startBounds;
	end = Math.min(end, endBounds);

	let invalidEnd = end === endBounds;
	let invalidSpan = start > end;

	// use the lesser of end or predecessor end;
	start = Math.max(start, predecessorEnd);

	let overlapped = end === predecessorEnd;
	let embedded = !invalidSpan && start > end;

	// remove negative time if the bounds
	// forced it to go negative
	if (invalidSpan || embedded) {
		end = start;
	}

	let options = {
		start, end, __start, __end, __startBounds, __endBounds,
		invalidStart, invalidEnd, invalidSpan, overlapped, embedded,
		__predecessor
	};

	let _span = updateTimeSpan(span, options);
	return _span;
}
