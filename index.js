/* eslint-env node */
'use strict';

const commands = require('./lib/commands');

module.exports = {
  name: '@busybusy/utils',

	includedCommands() {
		return commands;
	}
};
