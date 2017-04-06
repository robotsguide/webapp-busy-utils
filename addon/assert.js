/**
 * @module Utils
 *
 */
import EmberObject from 'ember-object';
import { assert } from 'ember-metal/utils';
import { typeOf, isNone } from 'ember-utils';
import { isEmberArray } from 'ember-array/utils';
import { deprecate } from 'ember-deprecations';
import UUID from './uuid';
import moment from 'moment';

/***/
function assertTest(test) {
	if (test) {
		return true;
	}
	return false;
}

function throwAssert(message) {
	throw new Error(`Assertion failed: ${message}`);
}

function assertFunc(message, test) {
	if (!assertTest(test)) {
		throwAssert(message);
	}
}

const Assert = EmberObject.extend();

/**
 * `Util/Assert`
 *
 * @class Assert
 * @namespace Utils
 */
Assert.reopenClass({

	/**
	 * Asserts that a functions arguments must be of a certain length
	 *
	 * @chainable
	 * @public
	 * @static
	 * @method funcNumArgs
	 * @param args {array} This is the `arguments` keyword from the calling function
	 * @param argCount {number} The number of args to test for
	 * @param [equal=false] {boolean} false if at most this many args and true if exactly this many args.
	 */
	funcNumArgs(args, argCount, equal=false) {
		assert('args must be an array in <utils::assert::funcNumArgs>', isEmberArray(args));
		assert('argCount must be a number in <utils::assert::funcNumArgs>', typeOf(argCount) === 'number');
		assert('equal must be a boolean in <utils::assert::funcNumArgs>', typeOf(equal) === 'boolean');

		if(equal) {
			assertFunc(`Function arguments must be equal to ${argCount}`, args.length === argCount);
		} else {
			assertFunc(`Function arguments must be less then or equal to ${argCount}`, args.length <= argCount);
		}
		return this;
	},

	/**
	 * Assert that a value is of type string
	 *
	 * @chainable
	 * @static
	 * @public
	 * @method isString
	 * @param value {mixed} The value to test
	 */
	isString(value) {
		assert('parameter 1 cannot be null or undefined <utils::assert::isString>', !isNone(value));

		assertFunc(`Type error [${typeof value}] expected a string`, typeof value === 'string');
		return this;
	},

	/**
	 * Assert that a value is of type number
	 *
	 * @chainable
	 * @static
	 * @public
	 * @method isNumber
	 * @param value {mixed} The value to test
	 */
	isNumber(value) {
		assert('parameter 1 cannot be null or undefined <utils::assert::isNumber>', !isNone(value));

		assertFunc(`Type error [${typeof value}] expected a number`, typeof value === 'number');
		return this;
	},

	/**
	 * Assert that a value is of type int
	 *
	 * @chainable
	 * @static
	 * @public
	 * @method isInteger
	 * @param value {mixed} The value to test
	 */
	isInteger(value) {
		assert('parameter 1 cannot be null or undefined <utils::assert::isInteger>', !isNone(value));

		assertFunc(`Type error [${typeof value}] expected an integer`, typeof value === 'number' && parseInt(value, 10) === value);
		return this;
	},

	/**
	 * Assert that a value is of type boolean
	 *
	 * @chainable
	 * @static
	 * @public
	 * @method isBoolean
	 * @param value {mixed} The value to test
	 */
	isBoolean(value) {
		assert('parameter 1 cannot be null or undefined <utils::assert::isBoolean>', !isNone(value));

		assertFunc(`Type error [${typeof value}] expected a boolean`, typeof value === 'boolean');
		return this;
	},

	/**
	 * Assert that a value is of type array
	 *
	 * @chainable
	 * @static
	 * @public
	 * @method isArray
	 * @param value {mixed} The value to test
	 */
	isArray(value) {
		assert('parameter 1 cannot be null or undefined <utils::assert::isArray>', !isNone(value));

		assertFunc(`Type error [${typeOf(value)}] expected an array`, isEmberArray(value));
		return this;
	},

	/**
	 * Assert that a value is of type object
	 *
	 * @chainable
	 * @static
	 * @public
	 * @method isObject
	 * @param value {mixed} The value to test
	 */
	isObject(value) {
		assert('parameter 1 cannot be null or undefined <utils::assert::isObject>', !isNone(value));

		assertFunc(`Type error [${typeOf(value)}] expected an object`, !isNone(value) && typeof value === 'object' && !isEmberArray(value));
		return this;
	},

	/**
	 * Assert that a value is a moment object
	 *
	 * @chainable
	 * @static
	 * @public
	 * @method isMoment
	 * @param value {mixed} The value to test
	 */
	isMoment(value) {
		assert('parameter 1 cannot be null or undefined <utils::assert::isMoment>', !isNone(value));

		assertFunc(`Type error [${value.constructor}] expected a Moment`, !isNone(value) && moment.isMoment(value));
		return this;
	},

	/**
	 * Assert that a value is of type uuid
	 *
	 * @chainable
	 * @static
	 * @public
	 * @method isUUID
	 * @param value {mixed} The value to test
	 */
	isUUID(value) {
		assert('parameter 1 cannot be null or undefined <utils::assert::isUUID>', !isNone(value));

		assertFunc(`Type error [${value}] expected a UUID`, typeof value === 'string' && UUID.isValid(value));
		return this;
	},

	/**
	 * Assert that a value is of type DS.Model
	 *
	 * @chainable
	 * @static
	 * @public
	 * @method isModel
	 * @param value {mixed} The value to test
	 */
	isModel(value) {
		deprecate("isModel is deprecated, please use isObject instead", false, {id: "assert-is-model", until: "3.0.0", url: ""});

		return this.isObject(value);
	},

	/**
	 * Assert that a custom test
	 *
	 * @chainable
	 * @static
	 * @public
	 * @method test
	 * @param message {string} the message to display if the test fails
	 * @param test {boolean} A test that eveluates to true or false
	 */
	test(message, test) {
		assert("parameter 1 must be a string in <utils::assert::test>", typeof message === 'string');

		assertFunc(message, test);
		return this;
	},

	/**
	 * Throw an assertion
	 *
	 * @static
	 * @public
	 * @method throw
	 * @param message {string} The message to throw.
	 */
	throw(message) {
		assert("parameter 1 must be a string in <utils::assert::throw>", typeof message === 'string');

		assertFunc(message, false);
	}
});

export default Assert;
