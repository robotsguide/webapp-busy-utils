/**
 * @module Utils
 *
 */
import Ember from 'ember';
import assert from './assert';

/**
 * `Util/Loc`
 *
 * @class Loc
 * @namespace Utils
 */
export default function loc(str, params) {

	assert.funcNumArgs(arguments, 2);
	assert.isString(str);

	if(!Ember.isNone(params)) {
		assert.isArray(params);
	}

	return Ember.String.loc(str, params);
}
