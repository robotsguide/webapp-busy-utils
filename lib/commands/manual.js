/* eslint-env node */

const Docs = require('../helpers/docs');

module.exports = {
	name: 'man',
	description: 'Prints a comment generated man page for a file',
	works: 'insideProject',

	availableOptions: [
		{ name: 'package', type: String, default: 'app', aliases: ['p'] },
		{ name: 'type', type: String, default: 'components', aliases: ['t'] }
	],

	anonymousOptions: ['<file-name>'],

	run: function(commandOptions, rawArgs) {
		//this.ui.write(commandOptions, rawArgs);

		let packageName = commandOptions.package;
		if (packageName !== 'app') {
			packageName = 'node_modules/' + packageName + '/addon';
		}

		const fileName = rawArgs.shift();
		const docs = new Docs(packageName, commandOptions.type, fileName);
		return docs.run();
	}
};
