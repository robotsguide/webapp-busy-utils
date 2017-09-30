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
import {
	isUnix,
	isObject,
	isTypeOfModel
} from './types';

/***/
function __assertTest(test) {
	if (test) {
		return true;
	}
	return false;
}

function __throwAssert(message) {
	throw new Error(`Assertion failed: ${message}`);
}

function __assertFunc(message, test) {
	if (!__assertTest(test)) {
		__throwAssert(message);
	}
}


/**
	* Asserts that a functions arguments must be of a certain length
	*
	* @public
	* @method funcNumArgs
	* @param args {array} This is the `arguments` keyword from the calling function
	* @param argCount {number} The number of args to test for
	* @param [equal=false] {boolean} false if at most this many args and true if exactly this many args.
	*/
export function assertFuncNumArgs(args, argCount, equal=false) {
	assert('args must be an array in <utils::assert::funcNumArgs>', isEmberArray(args));
	assert('argCount must be a number in <utils::assert::funcNumArgs>', typeOf(argCount) === 'number');
	assert('equal must be a boolean in <utils::assert::funcNumArgs>', typeOf(equal) === 'boolean');

	if(equal) {
		__assertFunc(`Function arguments must be equal to ${argCount}`, args.length === argCount);
	} else {
		__assertFunc(`Function arguments must be less then or equal to ${argCount}`, args.length <= argCount);
	}
}

/**
	* Assert that a value is of type string
	*
	* @public
	* @method isString
	* @param value {mixed} The value to test
	*/
export function assertIsString(value) {
	assert('parameter 1 cannot be null or undefined <utils::assert::isString>', !isNone(value));

	__assertFunc(`Type error [${typeof value}] expected a string`, typeof value === 'string');
}

/**
	* Assert that a value is of type number
	*
	* @public
	* @method isNumber
	* @param value {mixed} The value to test
	*/
export function assertIsNumber(value) {
	assert('parameter 1 cannot be null or undefined <utils::assert::isNumber>', !isNone(value));

	__assertFunc(`Type error [${typeof value}] expected a number`, typeof value === 'number');
}

/**
	* Assert that a value is of type int
	*
	* @public
	* @method isInteger
	* @param value {mixed} The value to test
	*/
export function assertIsInteger(value) {
	assert('parameter 1 cannot be null or undefined <utils::assert::isInteger>', !isNone(value));

	__assertFunc(`Type error [${typeof value}] expected an integer`, typeof value === 'number' && parseInt(value, 10) === value);
}

/**
	* Assert that a value is of type boolean
	*
	* @public
	* @method isBoolean
	* @param value {mixed} The value to test
	*/
export function assertIsBoolean(value) {
	assert('parameter 1 cannot be null or undefined <utils::assert::isBoolean>', !isNone(value));

	__assertFunc(`Type error [${typeof value}] expected a boolean`, typeof value === 'boolean');
}

/**
	* Assert that a value is of type array
	*
	* @public
	* @method isArray
	* @param value {mixed} The value to test
	*/
export function assertIsArray(value) {
	assert('parameter 1 cannot be null or undefined <utils::assert::isArray>', !isNone(value));

	__assertFunc(`Type error [${typeOf(value)}] expected an array`, isEmberArray(value));
}

/**
	* Assert that a value is of type object
	*
	* @public
	* @method isObject
	* @param value {mixed} The value to test
	*/
export function assertIsObject(value) {
	assert('parameter 1 cannot be null or undefined <utils::assert::isObject>', !isNone(value));

	__assertFunc(`Type error [${typeOf(value)}] expected an object`, isObject(value));
}

/**
	* Assert that a value is a moment object
	*
	* @public
	* @method isMoment
	* @param value {mixed} The value to test
	*/
export function assertIsMoment(value) {
	assert('parameter 1 cannot be null or undefined <utils::assert::isMoment>', !isNone(value));

	__assertFunc(`Type error [${value.constructor}] expected a Moment`, !isNone(value) && moment.isMoment(value));
}

/**
	* Assert that a value is a moment object
	*
	* @public
	* @method isMoment
	* @param value {mixed} The value to test
	*/
export function assertIsUnix(value) {
	assert('parameter 1 cannot be null or undefined <utils::assert::isMoment>', !isNone(value));

	__assertFunc(`Type error [${value.constructor}] expected a Moment`, isUnix(value));
}

/**
	* Assert that a value is of type uuid
	*
	* @public
	* @method isUUID
	* @param value {mixed} The value to test
	*/
export function assertIsUUID(value) {
	assert('parameter 1 cannot be null or undefined <utils::assert::isUUID>', !isNone(value));

	__assertFunc(`Type error [${value}] expected a UUID`, typeof value === 'string' && UUID.isValid(value));
}

/**
	* Assert that a value is of type DS.Model
	*
	* @public
	* @method isModel
	* @param value {mixed} The value to test
	*/
export function assertIsModel(value) {
	deprecate("isModel is deprecated, please use isObject instead", false, {id: "assert-is-model", until: "3.0.0", url: ""});

	assertIsObject(value);
}

/**
	* Assert that a value is of type DS.Model
	*
	* @public
	* @method isTypeOfModel
	* @param type {String} dasherized model name
	* @param value {mixed} The value to test
	*/
export function assertIsTypeOfModel(type, value) {
	assertIsString(type);

	__assertFunc(`Type error [${value}] expected a DS.Model of type <${type}>`, isTypeOfModel(type, value));
}

/**
	* Assert that a custom test
	*
	* @public
	* @method test
	* @param message {string} the message to display if the test fails
	* @param test {boolean} A test that eveluates to true or false
	*/
export function assertTest(message, test) {
	assert("parameter 1 must be a string in <utils::assert::test>", typeof message === 'string');

	__assertFunc(message, test);
}

/**
	* Throw an assertion
	*
	* @static
	* @public
	* @method throw
	* @param message {string} The message to throw.
	*/
export function assertThrow(message) {
	assert("parameter 1 must be a string in <utils::assert::throw>", typeof message === 'string');

	__assertFunc(message, false);
}

export default EmberObject.extend().reopenClass({
	funcNumArgs(...args) {
		return assertFuncNumArgs.apply(null, args) && this;
	},
	isString(...args) {
		return assertIsString.apply(null, args) && this;
	},
	isNumber(...args) {
		return assertIsNumber.apply(null, args) && this;
	},
	isInteger(...args) {
		return assertIsInteger.apply(null, args) && this;
	},
	isBoolean(...args) {
		return assertIsBoolean.apply(null, args) && this;
	},
	isArray(...args) {
		return assertIsArray.apply(null, args) && this;
	},
	isObject(...args) {
		return assertIsObject.apply(null, args) && this;
	},
	isMoment(...args) {
		return assertIsMoment.apply(null, args) && this;
	},
	isUUID(...args) {
		return assertIsUUID.apply(null, args) && this;
	},
	test(...args) {
		return assertTest.apply(null, args) && this;
	},
	throw(...args) {
		return assertThrow.apply(null, args) && this;
	}
});


