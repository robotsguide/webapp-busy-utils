/**
 * @module Utils
 *
 */
import EmberObject from 'ember-object';
import { isNone } from 'ember-utils';
import { assert } from 'ember-metal/utils';
import get from 'ember-metal/get';
import set from 'ember-metal/set';

import moment from 'moment';
import loc from './loc';
import localStorage from './local-storage';
import locale from './locale';
import Assert from './assert';
import TimeZones from './utils/time-zones';

const Time = EmberObject.extend();

/**
 * `Util/Time`
 *
 * @class Time
 * @namespace Utils
 * @uses Moment
 * @uses Utils.Loc
 * @uses Utils.LocalStorage
 */
Time.reopenClass({
	hoursFormat: null,

	timezone(timestamp) {
		if (timestamp !== undefined) {
			return moment(timestamp*1000).subtract(moment(timestamp*1000).utcOffset(), 'minutes').utcOffset()*60;
		} else {
			return moment().utcOffset()*60;
		}
	},

	timestamp(timestamp) {
		return this.date(timestamp).unix();
	},

	locale() {
		return moment.locale();
	},

	/**
	 * Formats time using the locale.format
	 *
	 * @public
	 * @static
	 * @method timeFormat
	 * @param timestamp {number}
	 * @param formatStr {string}
	 * @return {string}
	 */
	timeFormat(timestamp, formatStr) {
		Assert.isNumber(timestamp);
		Assert.isString(formatStr);

		return this.dateFormat(this.date(timestamp), formatStr);
	},

	dateFormat(date, formatStr) {
		Assert.isMoment(date);
		Assert.isString(formatStr);

		const str = locale.format(formatStr, this.locale());
		return date.format(str);
	},

	now() {
		return this.date();
	},

	utcTimestamp() {
		const time = this.timestamp();
		return time - this.timezone(time);
	},

	date(timestamp) {
		if (timestamp !== undefined) {
			return moment.utc(timestamp*1000);
		} else {
			return moment.utc().add(this.timezone(), 'seconds');
		}
	},

	isDST(timestamp) {
		if (timestamp !== undefined) {
			return moment(timestamp*1000).subtract(moment(timestamp*1000).utcOffset(), 'minutes').isDST();
		} else {
			return moment().isDST();
		}
	},

	nistTimestamp() {
		return window.__NIST.timestamp();
	},

	isTrustedTimeType() {
		return window.__NIST.isTrustedTimeType(...arguments);
	},

	convertSeconds(seconds, toFixed=2) {
		seconds = parseInt(seconds, 10);
		seconds = seconds < 0 || isNaN(seconds) ? 0 : seconds;

		let remaining = seconds;
		const hours = Math.floor(remaining / 3600);
		remaining %= 3600;

		const minutes = Math.floor(remaining / 60);
		remaining %= 60;

		const secs = Math.ceil(remaining);

		return {
			hours,
			minutes,
			seconds: secs,
			decimal: (Math.round((seconds/60/60) * Math.pow(10, toFixed)) / Math.pow(10, toFixed))
		};
	},

	/**
	 * converts seconds to hours and minutes based on the localStorage
	 * value set for the users preferences
	 *
	 * @public
	 * @method convertSecondsString
	 * @param seconds {number}
	 * @param padHours {boolean} defaults to false
	 * @param showSeconds {boolean} add seconds to the end
	 * @param longFormat {boolean} shows XX hrs XX mins format
	 * @param format {number} 10 for 00:00 and 20 for 0.00 formats
	 * @return {object} An object with the hours, minutes, and seconds
	 */
	convertSecondsString(seconds, format, padHours=false, showSeconds=false, longFormat=false, toFixed=2) {
		let timeStr = '';

		// format can be passed in to override the users ability to change
		// the format.
		if (isNone(format)) {
			format = localStorage.getWithDefault('format-hours-type', 10);
			format = parseInt(format, 10);
		}

		assert('format must be a number in convertSecondsString', typeof format === 'number');

		const time = this.convertSeconds(seconds, toFixed);

		if (format === 20) {
			// set time string for decimal hours
			timeStr = loc('%@ Hrs', [time.decimal.toFixed(toFixed)]);
		}  else {
			if (padHours === true) {
				time.hours = (time.hours < 10 ? '0' : '') + time.hours;
				if (longFormat === false) {
					time.minutes = (time.minutes < 10 ? '0' : '') + time.minutes;
					time.seconds = (time.seconds < 10 ? '0' : '') + time.seconds;
				}
			}

			if (longFormat === true) {
				// set time string for long format hrs mins secs
				if (showSeconds === true) {
					timeStr = loc('%@ Hrs %@ Mins %@ Secs', [time.hours, time.minutes, time.seconds]);
				} else {
					timeStr = loc('%@ Hrs %@ Mins', [time.hours, time.minutes]);
				}
			} else {
				if (showSeconds === true) {
					// set time string for hrs:min:secs
					timeStr = `${time.hours}:${time.minutes}:${time.seconds}`;
				} else {
					timeStr = `${time.hours}:${time.minutes}`;
				}
			}
		}

		return timeStr;
	},

	timezoneString(offset, isDST) {
		let zone = TimeZones[offset];
		if (zone && zone.locale) {
			zone = zone.locale['en-US'];
		}

		if (zone && zone.period) {
			const period = isDST ? 'dst' : 'standard';
			zone = zone.period[period];
		}
		return zone;
	},

	/**
	 * sets the users perferred hours setting
	 *
	 * Accepts two types
	 *	10 - default hours and mins in regular time format
	 *	20 - hours and mins in decimal format
	 *
	 * @public
	 * @method setHoursFormat
	 * @param type {number} 10 or 20
	 * @return {void}
	 */
	setHoursFormat(type) {
		assert('setHoursFormat only accepts a 10 for standard format or 20 for decimal format', type === 10 || type === 20);

		this.set('hoursFormat', type);
		localStorage.setProperty('format-hours-type', type);
	},

	getHoursFormat() {
		let type = localStorage.getProperty('format-hours-type');
		if (isNone(type)) {
			type = 10;
		}
		this.set('hoursFormat', type);
		return type;
	},

	set(key, property) {
		set(this, key, property);
		return this;
	},

	get(key) {
		return get(this, key);
	}
});

export default Time;
