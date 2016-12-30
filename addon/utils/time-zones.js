/**
 * @module utils
 *
 */
export default {
	"-39600": 'MIT',  // Midway Islands TimeEntryJul 13 2015 07:46:59GMT-11:00
	"-36000": 'HAST', // Hawaii Standard TimeEntryJulJul 13 2015 08:46:59GMTGMT-10:00
	"-32400": 'AKST', // Alaska Standard TimeEntryJulJul 13 2015 09:46:59GMTGMT-9:00
	"-28800": {
		period: {
			standard: 'PST',  // Pacific Standard TimeEntryJulJul 13 2015 10:46:59GMTGMT-8:00
			dst: 'AKDT'	  // Alaska Daylight Saving TimeEntryJulJul 13 2015 10:46:59GMTGMT-8:00
		}
	},
	"-25200": {
		period: {
			standard: 'MST',  // Mountain Standard TimeEntryJulJul 13 2015 11:46:59GMTGMT-7:00
			dst: 'PDT'		// Pacific Daylight Saving TimeEntryJulJul 13 2015 11:46:59GMTGMT-7:00
		}
	},
	"-21600": {
		period: {
			standard: 'CST',  // Central Standard TimeEntryJulJul 13 2015 12:46:59GMTGMT-6:00
			dst: 'MDT'		// Mountain Daylight Saving TimeEntryJulJul 13 2015 12:46:59GMTGMT-6:00
		}
	},
	"-18000": {
		period: {
			standard: 'EST',  // Eastern Standard TimeEntryJulJul 13 2015 13:46:59GMTGMT-5:00
			dst: 'CDT'		// Central Daylight Saving TimeEntryJulJul 13 2015 13:46:59GMTGMT-5:00
		}
	},
	"-14400": {
		period: {
			standard: 'PRT',  // Puerto Rico and US Virgin Islands TimeEntryJulJul 13 2015 14:46:59GMTGMT-4:00
			dst: 'EDT'		// Eastern Daylight Saving TimeEntryJulJul 13 2015 14:46:59GMTGMT-4:00
		}
	},
	"-12600": 'CNT',  // Canada Newfoundland TimeEntryJulJul 13 2015 15:16:59GMTGMT-3:30
	"-10800": {
		locale: {
			'en-US': 'AGT',  // Argentina Standard TimeEntryJulJul 13 2015 15:46:59GMTGMT-3:00
			'pg': 'BET'  // Brazil Eastern TimeEntryJulJul 13 2015 15:46:59GMTGMT-3:00
		}
	},
	"-3600": 'CAT',  // Central African TimeEntryJulJul 13 2015 17:46:59GMTGMT-1:00
	"0": {
		locale: {
			"en-US": 'GMT',  // Greenwich Mean TimeEntryJulJul 13 2015 18:46:59GMTGMT+
			"gm": 'WET'  // Western European TimeEntryJulJul 13 2015 18:46:59GMTGMT+0:00+
		}
	},
	"3600": {
		period: {
		  standard: 'CET',  // Central European TimeEntryJulJul 13 2015 19:46:59GMTGMT+1:00+
		  dst: 'WEST'		// Western European Summer TimeEntryJulJul 13 2015 19:46:59GMTGMT+1:00+
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
			   dst: 'EEST'		// Eastern European Summer TimeEntryJulJul 13 2015 21:46:59GMTGMT+3:00+
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
		   'en-US': 'AWST' // Australia Western TimeEntryJulJul 14 2015 02:46:59GMTGMT+8:00+
	   }
	},
	"32400": 'JST',  // Japan Standard TimeEntryJulJul 14 2015 03:46:59GMTGMT+9:00+
	"34200": 'ACST', // Australia Central TimeEntryJulJul 14 2015 04:16:59GMTGMT+9:30+
	"36000": 'AEST', // Australia Eastern TimeEntryJulJul 14 2015 04:46:59GMTGMT+10:00+
	"39600": 'SST',  // Solomon Standard TimeEntryJulJul 14 2015 05:46:59GMTGMT+11:00+
	"43200": 'NZST', // New Zealand Standard TimeEntryJulJul 14 2015 06:46:59GMTGMT+12:00+
	"46800": 'NZDT' // New Zealand Daylight Saving TimeEntryJulJul 14 2015 07:46:59GMTGMT+13:00
};
