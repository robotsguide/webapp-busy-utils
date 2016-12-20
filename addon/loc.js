/**
 * @module Utils
 *
 */
import { isNone } from 'ember-utils';
import { loc } from 'ember-string';
import assert from './assert';

/**
 * `Util/Loc`
 *
 * @class Loc
 * @namespace Utils
 */
export default function localizer(str, params) {
	assert.funcNumArgs(arguments, 2);
	assert.isString(str);

	if(!isNone(params)) {
		assert.isArray(params);
	}

	return loc(str, params);
}
