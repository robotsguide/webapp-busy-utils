/**
 * @module Utils
 *
 */
import EmberObject from 'ember-object';
import { isEmpty } from 'ember-utils';
import CurrencyCodes from './utils/currency-codes';
import Assert from './assert';

const Currency = EmberObject.extend();

Currency.reopenClass({
	codes() {
		Assert.funcNumArgs(arguments, 0, true);

		return CurrencyCodes.sortBy('code').mapBy('code');
	},

	code(type) {
		Assert.funcNumArgs(arguments, 1, true);
		Assert.isString(type);

		type = type.toUpperCase();
		return CurrencyCodes.sortBy('code').findBy('code', type);
	},

	country(type) {
		Assert.funcNumArgs(arguments, 1, true);
		Assert.isString(type);

		type = type.toLowerCase();
		return CurrencyCodes.filter(c => {
			return (c.countries || []).indexOf(type) > -1;
		});
	},

	number(type) {
		Assert.funcNumArgs(arguments, 1, true);
		if (typeof type === 'number') {
			type = ('000' + type).substr(-3);
		}

		return CurrencyCodes.findBy('number', type);
	},

	countries() {
		Assert.funcNumArgs(arguments, 0, true);

		const list = [];
		CurrencyCodes.mapBy('countries').forEach(item => {
			if (!isEmpty(item)) {
				item.forEach(country => {
					if (list.indexOf(country) === -1) {
						list.push(country);
					}
				});
			}
		});
		return list;
	}
});

export default Currency;
