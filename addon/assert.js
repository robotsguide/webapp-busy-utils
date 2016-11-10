/**
 * @module Utils
 *
 */
import Ember from 'ember';
import DS from 'ember-data';
import UUID from './uuid';
import moment from 'moment';

/***/
function assertTest(test) {
	if (test) {
		return true;
	}
	return false;
}

function throwAssert(message, depth) {
	const err = new Error();
	const func = err.stack.split('at')[depth];

	Ember.assert(`${message} in${func}`, false);
}

function assert(message, test, depth=4) {
	if (!assertTest(test)) {
		throwAssert(message, depth);
	}
}

const Assert = Ember.Object.extend();

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
		Ember.assert('args must be an array in <utils::assert::funcNumArgs>', Ember.isArray(args));
		Ember.assert('argCount must be a number in <utils::assert::funcNumArgs>', Ember.typeOf(argCount) === 'number');
		Ember.assert('equal must be a boolean in <utils::assert::funcNumArgs>', Ember.typeOf(equal) === 'boolean');

		if(equal) {
			assert(`Function arguments must be equal to ${argCount}`, args.length === argCount);
		} else {
			assert(`Function arguments must be less then or equal to ${argCount}`, args.length <= argCount);
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
		Ember.assert('parameter 1 cannot be null or undefined <utils::assert::isString>', !Ember.isNone(value));

		assert(`Type error [${typeof value}] expected a string`, typeof value === 'string');
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
		Ember.assert('parameter 1 cannot be null or undefined <utils::assert::isNumber>', !Ember.isNone(value));

		assert(`Type error [${typeof value}] expected a number`, typeof value === 'number');
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
		Ember.assert('parameter 1 cannot be null or undefined <utils::assert::isInteger>', !Ember.isNone(value));

		assert(`Type error [${typeof value}] expected an integer`, typeof value === 'number' && parseInt(value, 10) === value);
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
		Ember.assert('parameter 1 cannot be null or undefined <utils::assert::isBoolean>', !Ember.isNone(value));

		assert(`Type error [${typeof value}] expected a boolean`, typeof value === 'boolean');
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
		Ember.assert('parameter 1 cannot be null or undefined <utils::assert::isArray>', !Ember.isNone(value));

		assert(`Type error [${Ember.typeOf(value)}] expected an array`, Ember.isArray(value));
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
		Ember.assert('parameter 1 cannot be null or undefined <utils::assert::isObject>', !Ember.isNone(value));

		assert(`Type error [${Ember.typeOf(value)}] expected an object`, !Ember.isNone(value) && typeof value === 'object' && !Ember.isArray(value));
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
		Ember.assert('parameter 1 cannot be null or undefined <utils::assert::isMoment>', !Ember.isNone(value));

		assert(`Type error [${value.constructor}] expected a Moment`, !Ember.isNone(value) && moment.isMoment(value));
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
		Ember.assert('parameter 1 cannot be null or undefined <utils::assert::isUUID>', !Ember.isNone(value));

		assert(`Type error [${value}] expected a UUID`, typeof value === 'string' && UUID.isValid(value));
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
		Ember.assert('parameter 1 cannot be null or undefined <utils::assert::isModel>', !Ember.isNone(value));

		if (!(value instanceof DS.Model) && typeof value === 'object' && value.get) {
			// if DS.PromiseObject then get the content model from the object and check it.
			value = !Ember.isNone(value.get('content')) ? value.get('content') : value;

			// if collection model then get the model from the model property.
			value = !Ember.isNone(value.get('model')) ? value.get('model') : value;
		}

		assert(`Type error [${value.constructor}] expected a DS.Model`, Ember.typeOf(value) === 'instance' && value instanceof DS.Model);
		return this;
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
		Ember.assert("parameter 1 must be a string in <utils::assert::test>", typeof message === 'string');

		assert(message, test);
		return this;
	},

	/**
	 * Throw an assertion
	 *
	 * @chainable
	 * @static
	 * @public
	 * @method throw
	 * @param message {string} The message to throw.
	 */
	throw(message) {
		Ember.assert("parameter 1 must be a string in <utils::assert::throw>", typeof message === 'string');

		assert(message, false);
		return this;
	}
});

export default Assert;
