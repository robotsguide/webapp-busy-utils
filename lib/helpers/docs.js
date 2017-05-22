/* eslint-env node */

const FileParser = require('./file-parser');
const Logger = require('./logger');

module.exports = class Docs {
	constructor(packageName, type, name) {
		this.packageName = packageName;
		this.type = type;
		this.name = name;

		// create path string
		this.pathName = (packageName + '/' + type + '/' + name).replace(/\/\//g, '/');
	}

	parse() {
		const fileParser = new FileParser(this.pathName);
		return fileParser.getData().then(data => {
			const logger = new Logger(data);
			logger.print();
			return true;
		});
	}

	run() {
		return this.parse();
	}
};
