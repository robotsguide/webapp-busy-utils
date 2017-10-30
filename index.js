/* eslint-env node */
'use strict';

const commands = require('./lib/commands');

module.exports = {
  name: 'busy-utils',

	includedCommands() {
		return commands;
	}
};
