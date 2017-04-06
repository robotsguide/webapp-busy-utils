/**
 * @module Utils
 *
 */
import EmberObject from 'ember-object';
import { isNone } from 'ember-utils';
import get from 'ember-metal/get';
import assert from './assert';

/***/

/**
 * Locales list for spefic regions.
 *
 * @private
 * @property __locales
 * @type Object
 */
const __locales = {
  'es': {
		'h:mm A': 'h:mm a',
		'MMM D': 'll',
		'MMM DD': 'll',
		'MMM. DD, h:mm A': 'll h:mm a',
		'MMM D YYYY': 'll',
		'MMM D, YYYY': 'll',
		'h:mm A M/D/YY': 'LT l',
		'h:mm A MM/DD/YY': 'LT l',
		'MMM Do h:mm A': 'll h:hh a',
		'MMM Do, YYYY': 'll',
		'MMMM Do YYYY': 'LL',
		'MMMM Do YYYY, h:mm A': 'LL, LT',
		'ddd, MMM Do': 'ddd, ll',
		'ddd, MMM DD': 'ddd, ll',
		'ddd, MMM D, YYYY': 'ddd, ll',
		'ddd, MMM Do, YYYY': 'ddd, ll',
		'ddd. MMM Do, YYYY': 'ddd, ll',
		'ddd. MMM Do h:mm A': 'll h:mm a',
		'MMMM D, YYYY @h:mm A': 'LL @h:mm a',
		'ddd. MMM Do YYYY h:mm A': 'ddd, ll h:mm a'
	}
};

/**
 * `Util/Locale`
 *
 * @class Locale
 * @namespace BusyUtils
 * @extends Ember.Object
 */
const Locale = EmberObject.extend();
Locale.reopenClass({
  /**
   * Get the locale formated date str for a specific region.
   *
   * @public
   * @method format
   * @param str {string} Moment format str
   * @return {string} locale specific moment str
   */
  format(str, locale='en') {
    assert.funcNumArgs(arguments, 2);
    assert.isString(str);
    assert.isString(locale);

    const _formats = get(__locales, locale);
    if (!isNone(_formats)) {
      const format = get(_formats, str);
      if (!isNone(format)) {
        return format;
      }
    }
    return str;
  }
});

export default Locale;
