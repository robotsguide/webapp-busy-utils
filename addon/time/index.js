/**
 * @module Time
 *
 */

/**
 * legacy support for older imports
 */
import legacy from './legacy';
export default legacy;

import { timeSpan } from './time-span';

import {
	timeSpanMap,
	elapsedTime,
	elapsedTimeMap
} from './elapsed-time';

export function createDate(timestamp) {
	return legacy.date(timestamp);
}

export function createUnix(timestamp) {
	return legacy.timestamp(timestamp);
}

export {
	timeSpan,
	timeSpanMap,
	elapsedTime,
	elapsedTimeMap
};
