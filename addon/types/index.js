/**
 * @module Types
 *
 */
import Ember from 'ember';
import { createDate } from 'busy-utils/time';
import { assertIsString } from 'busy-utils/assert';

const { get, typeOf, isArray, isNone } = Ember;

/**
 * Checks if the input is a valid unix timestamp
 *
 * @private
 * @method isUnix
 * @params timestamp {Mixed}
 * @return {boolean}
 */
export function isUnix(timestamp) {
	if (!isNone(timestamp) && typeof timestamp === 'number' && !isNaN(timestamp)) {
		let date = createDate(timestamp);
		return date.isValid() && date.unix() === timestamp;
	}
	return false;
}

export function isObject(value) {
	return !isNone(value) && !isArray(value) && typeof value === 'object';
}

export function isArrayString(itterator) {
	return isArray(itterator) && itterator.reject(value => typeOf(value) === 'string').length === 0;
}

export function isArrayNumber(itterator) {
	return isArray(itterator) && itterator.reject(value => typeOf(value) === 'number').length === 0;
}

export function isTypeOfModel(type, model) {
	assertIsString(type);

	if (isObject(model)) {
		let modelName = get(model, 'modelName') || get(model, '_internalModel.modelName');
		return modelName === type;
	}
	return false;
}

