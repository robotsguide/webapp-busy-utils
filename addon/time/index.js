/**
 * @module Time
 *
 */

/**
 * legacy support for older imports
 */
import legacy from './legacy';
export default legacy;

import {
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
	elapsedTime,
	elapsedTimeMap
}
