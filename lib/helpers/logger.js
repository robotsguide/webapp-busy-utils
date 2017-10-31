/* eslint-env node */

const chalk = require('chalk');

function isNone(value) {
	return (value === null || value === undefined);
}

function isEmpty(value) {
	return (isNone(value) || value.length === 0);
}

module.exports = class Logger {
	constructor(docs) {
		this.docs = docs;
	}

	print() {
		this.newLine().newLine();

		// print class info
		this._class();

		this.newLine().newLine();

		// print property info
		this._property();

		this.newLine().newLine();

		// print method info
		this._method();

		this.newLine().newLine();
		this.dashedLine();
		this.newLine().newLine();
	}

	find(arr, id) {
		return this.filter(arr, id)[0];
	}

	filter(arr, id) {
		const filter = [];
		arr.forEach(item => {
			if (item.has(id)) {
				filter.push(item);
			}
		});
		return filter;
	}

	writeBlocks(tabs, ...blocks) {
		let text = ''
		// this adds 1 tab by default to everything
		for(let i=0; i<=tabs; i++) {
			text += "  ";
		}
		console.log(text, ...blocks); // eslint-disable-line
		return this;
	}

	addChars(str, char, maxLength=126) {
		maxLength = maxLength - str.length;
		for(let i=0; i<=maxLength; i++) {
			str = str + char;
		}
		return str;
	}

	newLine() {
		this.writeBlocks(-1, '');
		return this;
	}

	dashedLine() {
		this.writeBlocks(-1, chalk.blue.dim(this.addChars('', '-', 72)));
	}

	_module() {
		const module = this.find(this.docs, 'module');
		if (!isNone(module)) {
			//console.log('module', module);
			//const subMod = this.find('submodule');
			this.writeBlocks(0,
				chalk.red(module.name)
			);
		}
	}

	dasherize(str) {
		str = str.replace(/\//, '_');
		str = str.replace(/([A-Z][^A-Z]*)/g, (...args) => {
			return '-' + args[0].toLowerCase();
		});
		return str.replace(/-/, '').replace(/_-/, '/');
	}

	_class() {
		const _class = this.find(this.docs, 'class');
		if (!isNone(_class)) {
			const val = _class.getProperty('class');
			const classString = val.desc.shift();
			this.dashedLine();
			this.writeBlocks(0, this.addChars('', ' ', 24) + chalk.blue.italic(this.dasherize(val.name)));
			this.dashedLine();
			this.writeBlocks(0, chalk.yellow.dim(this.dasherize(classString)));
			this.newLine();

			this._description(val.desc, res => {
				this.writeBlocks(1, res);
			});

			let namespace = _class.getProperty('namespace');
			if (!isNone(namespace) && !isNone(namespace.name)) {
				this.writeBlocks(1, chalk.gray.dim('namespace: ' + namespace.name));
			}

			let _extends = _class.getProperty('extends');
			if (!isNone(_extends) && !isNone(_extends.name)) {
				this.writeBlocks(1, chalk.gray.dim('extends: ' + _extends.name));
			}
			this.dashedLine();
		}
	}

	_property() {
		this.writeBlocks(0, chalk.white.dim.italic('Properties'));
		const properties = this.filter(this.docs, 'property');
		const _private = this.filter(properties, 'private');
		const _protected = this.filter(properties, 'protected');
		const _public = this.filter(properties, 'public');

		if (!isEmpty(_private)) {
			this.writeBlocks(1, chalk.red('Private'));
			this._printProps(_private);
		}

		if (!isEmpty(_protected)) {
			this.writeBlocks(1, chalk.yellow('Protected'));
			this._printProps(_protected);
		}

		if (!isEmpty(_public)) {
			this.writeBlocks(1, chalk.blue('Public'));
			this._printProps(_public);
		}
	}

	_printProps(arr) {
		arr.forEach(item => {
			const optional = item.isOptional ? 'optional' : '';
			const required = item.isRequired ? 'required' : '';
			const readOnly = item.isReadOnly ? 'readonly' : '';
			let _default = item.getProperty('default') || '';
			if (!isEmpty(_default)) {
				_default = 'Default: ' + _default.name;
			}

			this.writeBlocks(2,
				chalk.green(item.getProperty('property').name),
				chalk.yellow(item.getProperty('type').type),
				chalk.gray.dim(item.getProperty('type').desc.join(' ')),
				chalk.gray.dim(optional),
				chalk.gray.dim(required),
				chalk.gray.dim(readOnly),
				chalk.gray.dim(_default)
			);

			this._description(item.getProperty('property').desc, res => {
				this.writeBlocks(3, res);
			});

			const deprecatd = item.getProperty('deprecatd');
			if (!isNone(deprecatd)) {
				this.writeBlocks(4,
					chalk.gray(deprecatd.name),
					chalk.gray(item.getProperty('since').name)
				);
			}
		});
	}

	_method() {
		this.writeBlocks(0, chalk.white.dim.italic('Methods'));
		const methods = this.filter(this.docs, 'method');
		const _private = this.filter(methods, 'private');
		const _protected = this.filter(methods, 'protected');
		const _public = this.filter(methods, 'public');

		if (!isEmpty(_private)) {
			this.writeBlocks(1, chalk.red('Private'));
			this._printMethods(_private);
		}

		if (!isEmpty(_protected)) {
			this.writeBlocks(1, chalk.yellow('Protected'));
			this._printMethods(_protected);
		}

		if (!isEmpty(_public)) {
			this.writeBlocks(1, chalk.blue('Public'));
			this._printMethods(_public);
		}
	}

	_printMethods(arr) {
		arr.forEach(item => {
			this.writeBlocks(2,
				chalk.green(item.getProperty('method').name),
				chalk.yellow(item.getProperty('returns').type),
				chalk.gray.dim(item.getProperty('returns').desc.join(' '))
			);

			this._description(item.getProperty('method').desc, res => {
				this.writeBlocks(3, res);
			});

			const deprecatd = item.getProperty('deprecatd');
			if (!isNone(deprecatd)) {
				this.writeBlocks(4,
					chalk.gray(deprecatd.name),
					chalk.gray(item.getProperty('since').name)
				);
			}

			const params = item.getPropertyArrray('params');
			if (params.length) {
				this.writeBlocks(3, chalk.white.dim.italic('Params'));
				params.forEach(param => {
					this.writeBlocks(4,
						chalk.green(param.name),
						chalk.yellow(param.type)
					);

					this._description(param.desc, res => {
						this.writeBlocks(5, res);
					});
				});
			}
		});
	}

	_constructor() {
		const con = this.find(this.docs, 'constructor');
		if (!isNone(con)) {
		// params
		// return
		}
	}

	_description(desc, callback) {
		if (desc && desc.forEach) {
			desc.forEach(str => {
				str = str.replace(/([^`]*)(`([^`]*)`)?/g, (s, normal, q, quoted) => {
					normal = isNone(normal) ? '' : normal;
					quoted = isNone(quoted) ? '' : quoted;

					normal = chalk.gray.dim(normal);
					if (!isEmpty(quoted)) {
						quoted = chalk.gray(quoted);
					}

					return normal + quoted;
				});

				callback.call(this, str);
			});
		}
	}
};
