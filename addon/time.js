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

/***/
const zoneList = {
	"-39600": 'MIT',  // Midway Islands TimeEntryJul 13 2015 07:46:59GMT-11:00
	"-36000": 'HAST', // Hawaii Standard TimeEntryJulJul 13 2015 08:46:59GMTGMT-10:00
	"-32400": 'AKST', // Alaska Standard TimeEntryJulJul 13 2015 09:46:59GMTGMT-9:00
	"-28800": {
		period: {
			standard: 'PST',  // Pacific Standard TimeEntryJulJul 13 2015 10:46:59GMTGMT-8:00
			dst: 'AKDT',	  // Alaska Daylight Saving TimeEntryJulJul 13 2015 10:46:59GMTGMT-8:00
		}
	},
	"-25200": {
		period: {
			standard: 'MST',  // Mountain Standard TimeEntryJulJul 13 2015 11:46:59GMTGMT-7:00
			dst: 'PDT',		// Pacific Daylight Saving TimeEntryJulJul 13 2015 11:46:59GMTGMT-7:00
		}
	},
	"-21600": {
		period: {
			standard: 'CST',  // Central Standard TimeEntryJulJul 13 2015 12:46:59GMTGMT-6:00
			dst: 'MDT',		// Mountain Daylight Saving TimeEntryJulJul 13 2015 12:46:59GMTGMT-6:00
		}
	},
	"-18000": {
		period: {
			standard: 'EST',  // Eastern Standard TimeEntryJulJul 13 2015 13:46:59GMTGMT-5:00
			dst: 'CDT',		// Central Daylight Saving TimeEntryJulJul 13 2015 13:46:59GMTGMT-5:00
		}
	},
	"-14400": {
		period: {
			standard: 'PRT',  // Puerto Rico and US Virgin Islands TimeEntryJulJul 13 2015 14:46:59GMTGMT-4:00
			dst: 'EDT',		// Eastern Daylight Saving TimeEntryJulJul 13 2015 14:46:59GMTGMT-4:00
		}
	},
	"-12600": 'CNT',  // Canada Newfoundland TimeEntryJulJul 13 2015 15:16:59GMTGMT-3:30
	"-10800": {
		locale: {
			'en-US': 'AGT',  // Argentina Standard TimeEntryJulJul 13 2015 15:46:59GMTGMT-3:00
			'pg': 'BET',  // Brazil Eastern TimeEntryJulJul 13 2015 15:46:59GMTGMT-3:00
		}
	},
	"-3600": 'CAT',  // Central African TimeEntryJulJul 13 2015 17:46:59GMTGMT-1:00
	"0": {
		locale: {
			"en-US": 'GMT',  // Greenwich Mean TimeEntryJulJul 13 2015 18:46:59GMTGMT+
			"gm": 'WET',  // Western European TimeEntryJulJul 13 2015 18:46:59GMTGMT+0:00+
		}
	},
	"3600": {
		period: {
		  standard: 'CET',  // Central European TimeEntryJulJul 13 2015 19:46:59GMTGMT+1:00+
		  dst: 'WEST',		// Western European Summer TimeEntryJulJul 13 2015 19:46:59GMTGMT+1:00+
		}
	},
	"7200": {
	  locale: {
		  'en-US': {
			  period: {
				  standard: 'EET',  // Eastern European TimeEntryJulJul 13 2015 20:46:59GMTGMT+2:00+
				  dst: 'CEST' 	  // Central European Summer TimeEntryJulJul 13 2015 20:46:59GMTGMT+2:00+
			  }
		  },
		  "ar": 'ART',  // (Arabic) Egypt Standard TimeEntryJulJul 13 2015 20:46:59GMTGMT+2:00+
	  }
	},
	"10800": {
		period: {
			  standard: 'EAT',  // Eastern African TimeEntryJulJul 13 2015 21:46:59GMTGMT+3:00+
			   dst: 'EEST',		// Eastern European Summer TimeEntryJulJul 13 2015 21:46:59GMTGMT+3:00+
		}
	},
	"12600": 'MET',  // Middle East TimeEntryJulJul 13 2015 22:16:59GMTGMT+3:30+
	"14400": 'NET',  // Near East TimeEntryJulJul 13 2015 22:46:59GMTGMT+4:00+
	"18000": 'PLT',  // Pakistan Lahore TimeEntryJulJul 13 2015 23:46:59GMTGMT+5:00+
	"19800": 'IST',  // India Standard TimeEntryJulJul 14 2015 00:16:59GMTGMT+5:30+
	"21600": 'BST',  // Bangladesh Standard TimeEntryJulJul 14 2015 00:46:59GMTGMT+6:00+
	"25200": 'ICT',  // Indochina TimeEntryJulJul 14 2015 01:46:59GMTGMT+7:00+
	"28800": {
	   locale: {
		   'ch': 'CTT',  // China Taiwan TimeEntryJulJul 14 2015 02:46:59GMTGMT+8:00+
		   'en': 'SGT',  // Singapore TimeEntryJulJul 14 2015 02:46:59GMTGMT+8:00+
		   'en-US': 'AWST', // Australia Western TimeEntryJulJul 14 2015 02:46:59GMTGMT+8:00+
	   }
	},
	"32400": 'JST',  // Japan Standard TimeEntryJulJul 14 2015 03:46:59GMTGMT+9:00+
	"34200": 'ACST', // Australia Central TimeEntryJulJul 14 2015 04:16:59GMTGMT+9:30+
	"36000": 'AEST', // Australia Eastern TimeEntryJulJul 14 2015 04:46:59GMTGMT+10:00+
	"39600": 'SST',  // Solomon Standard TimeEntryJulJul 14 2015 05:46:59GMTGMT+11:00+
	"43200": 'NZST', // New Zealand Standard TimeEntryJulJul 14 2015 06:46:59GMTGMT+12:00+
	"46800": 'NZDT', // New Zealand Daylight Saving TimeEntryJulJul 14 2015 07:46:59GMTGMT+13:00
};

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
		let zone = zoneList[offset];
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
