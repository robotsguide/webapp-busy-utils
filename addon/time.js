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

	convertSeconds(seconds, leadingZeros) {
		seconds = parseInt(seconds, 10);

		leadingZeros = leadingZeros === true ? true : false;
		seconds = seconds < 0 || isNaN(seconds) ? 0 : seconds;

		var remaining = seconds;
		var hours = Math.floor(remaining / 3600);
			remaining %= 3600;

		var minutes = Math.floor(remaining / 60);
			remaining %= 60;

		var secs = Math.ceil(remaining);

		return {
			hours: (leadingZeros && hours < 10) ? '0' + hours.toString() : hours.toString(),
			minutes: (minutes < 10) ? '0' + minutes.toString() : minutes.toString(),
			seconds: (secs < 10) ? '0' + secs.toString() : secs.toString(),
			decimal: (seconds/60/60).toFixed(2)
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
	convertSecondsString(seconds, padHours, showSeconds, longFormat, format) {
		let timeStr = '';

		// format can be passed in to override the users ability to change
		// the format.
		if (isNone(format)) {
			format = localStorage.getWithDefault('format-hours-type', 10);
			format = parseInt(format, 10);
		}

		assert('format must be a number in convertSecondsString', typeof format === 'number');

		const time = this.convertSeconds(seconds, padHours);

		if (format === 20) {
			// set time string for decimal hours
			timeStr = longFormat === true ? loc('%@ Hrs', [time.decimal]) : time.decimal;
		}  else {
			if (longFormat === true) {
				// remove padded zeros
				time.minutes = !padHours ? time.minutes.replace(/0([\d]+)$/g, '$1') : time.minutes;
				time.seconds = !padHours ? time.seconds.replace(/0([\d]+)$/g, '$1') : time.seconds;

				// set time string for long format hrs mins secs
				timeStr = showSeconds === true ? loc('%@ Hrs %@ Mins %@ Secs', [time.hours, time.minutes, time.seconds]) : loc('%@ Hrs %@ Mins', [time.hours, time.minutes]);
			} else {
				// set time string for hrs:min:secs
				timeStr = time.hours + ':' + time.minutes;
				if (showSeconds === true) {
					timeStr = timeStr + ':' + time.seconds;
				}
			}
		}
		return timeStr;
	},

	timezoneString(offset, isDST) {
		var zone = TimeZones[offset];
		if (zone && zone.locale) {
			zone = zone.locale['en-US'];
		}

		if (zone && zone.period) {
			var period = isDST ? 'dst' : 'standard';
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
