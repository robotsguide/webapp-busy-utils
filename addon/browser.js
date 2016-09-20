/**
 * @module Utils
 *
 */
import Ember from 'ember';
import assert from './assert';

/***/
const browserInfo = Ember.Object.extend();

/**
 * Helper method to determine the broser version.
 *
 * @private
 * @method version
 * @param browser {string} the broser type.
 * @return {string}
 */
function _version( browser ) {
	// browser and user agent are the same
	// so just return an empty string for the version.
	if(browser === window.navigator.userAgent) {
		return '';
	}

	// firefox and opera have alternate version strings in some cases.
	if (window.navigator.userAgent.indexOf("Version") !== -1) {
		browser = 'Version';
	}

	// get the index of the version string.
	const index = window.navigator.userAgent.indexOf(browser) + browser.length + 1;

	// get the version from the user agent.
	let version = window.navigator.userAgent.substring(index);

	// trim the version string at semicolon/space if present
	if (version.indexOf(';') !== -1) {
		version = version.substring(0, version.indexOf(';'));
	}

	if (version.indexOf(' ') !== -1) {
		version = version.substring(0, version.indexOf(' '));
	}

	return version;
}

/**
 * `Util/Browser`
 *
 * @class Browser
 * @namespace Utils
 * @extends Ember.Object
 */
browserInfo.reopenClass({

	/**
	 * Parses the userAgent to get the browser type
	 *
	 * @public
	 * @method type
	 * @return {string} The Browser type string.
	 */
	type() {
		assert.funcNumArgs(arguments, 0, true);

		let name = window.navigator.userAgent;
		if (this.isBrowserType("Opera")) { // Opera
			name = "Opera";
		} else if (this.isBrowserType("MSIE")) { // Internet Explorer
			name = "Internet Explorer";
		} else if (this.isBrowserType('Chrome')) { // Chrome
			name = "Chrome";
		} else if (this.isBrowserType("Safari")) { // Safari
			name = "Safari";
		} else if (this.isBrowserType("Firefox")) { // Firefox
			name = "Firefox";
		} else { // some other browser
			const nameOffset = window.navigator.userAgent.lastIndexOf(' ') + 1;
			const versOffset = window.navigator.userAgent.lastIndexOf('/');

			if (nameOffset < versOffset) { // In most other browsers, "name/version" is at the end of userAgent
				name = window.navigator.userAgent.substring(nameOffset, versOffset);
			}
		}
		return name;
	},

	/**
	 * Parses the userAgent to get the version of the browser.
	 *
	 * @public
	 * @method version
	 * @return {string} The browser version
	 */
	version() {
		assert.funcNumArgs(arguments, 0, true);

		const name = this.type();
		return _version(name);
	},

	/**
	 * Parses the userAgent to find the operating system
	 *
	 * @public
	 * @method osType
	 * @return {string} The OS type.
	 */
	osType() {
		assert.funcNumArgs(arguments, 0, true);

		let osType = "Unknown OS";
		if (window.navigator.appVersion.indexOf("Win") !== -1) { // windows os
			osType = 'Windows';
		} else if (window.navigator.appVersion.indexOf("Mac") !== -1) { // mac os could be a mobile client.
			osType = 'MacOS';

			// check if this is mac os or ios.
			if (window.navigator.appVersion.indexOf("Mobile") !== -1) {
				osType = 'iOS';
			}
		} else if (window.navigator.appVersion.indexOf("Android") !== -1) { // android os
			osType = 'Android';
		} else if (window.navigator.appVersion.indexOf("Linux") !== -1) { // linux os
			osType = 'Linux';
		} else if (window.navigator.appVersion.indexOf("X11") !== -1) { // unix os
			osType = 'UNIX';
		}
		return osType;
	},

	/**
	 * Parses the userAgent to find the OS version
	 *
	 * @public
	 * @method osVersion
	 * @return {string} The os version sematic version.
	 */
	osVersion() {
		assert.funcNumArgs(arguments, 0, true);

		const start = window.navigator.appVersion.indexOf('(') + 1;
		const end = window.navigator.appVersion.indexOf(')');

		if (start && end) {
			let version = window.navigator.appVersion.substring(start, end);

			return version.replace(/[^\d]*([\d]?[\d]?(\.|_)?[\d]?[\d]?(\.|_)?[\d]?[\d])[\s\S]*/, '$1').replace(/_/g, '.');
		} else {
			return window.navigator.appVersion;
		}
	},

	/**
	 * Wrapper method return browser type, version, majorVersion, osType, osVersion
	 *
	 * @public
	 * @method detect
	 * @return {object}
	 */
	detect() {
		assert.funcNumArgs(arguments, 0, true);

		// get the browser name.
		const type = this.type();
		let version = _version(type);
		let majorVersion = `${parseInt(version, 10)}`;

		// get operating system info.
		const osType = this.osType();
		const osVersion = this.osVersion();


		if (isNaN(majorVersion)) {
			version  = `${parseFloat(window.navigator.appVersion)}`;
			majorVersion = `${parseInt(window.navigator.appVersion, 10)}`;
		}

		return { type, version, majorVersion , osType, osVersion};
	},

	/**
	 * Check to see if this is a type of browser.
	 *
	 * @public
	 * @method isBrowserType
	 * @param browser {sting} browser type Chrome, Safari, ect.
	 * @return {boolean}
	 */
	isBrowserType(browser) {
		return (window.navigator.userAgent.indexOf(browser) !== -1);
	},
});

export default browserInfo;
