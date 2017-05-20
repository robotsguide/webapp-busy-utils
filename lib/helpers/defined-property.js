/* eslint-env node */

const kIdentifiers = [
	'private', 'protected', 'public', 'method', 'static',
	'property', 'type', 'params', 'returns', 'module', 'class',
	'namespace', 'extends', 'readonly', 'submodule', 'constructor',
	'optional', 'required', 'default', 'chainable', 'deprecatd', 'since',
	'async', 'interface'
];

const kDescBefore = ['class', 'method', 'property', 'constructor', 'module', 'extends', 'namespace'];
const kDescAfter = ['params', 'param', 'return', 'returns', 'type', 'deprecatd', 'since'];

module.exports = class DefinedProperty {
	/**
	 * @public
	 * @method constructor
	 * @params comments {string[]}
	 * @return {DefinedProperty}
	 */
	constructor(comments=[]) {
		this.comments = comments;
		this.map = new Map(); //eslint-disable-line
		this.setup();
	}

	has(key) {
		return this.map.has(key);
	}

	setup() {
		let lastId = null;
		let lastDesc = null;
		this.comments.forEach(line => {
			line.replace(/^(@([^ ]*)( ([^\{][^ ]*))?( \{([^\}]*)?\})?)?([\s\S]*)$/, (...args) => {
				let id = (args[2] || '').trim().toLowerCase();
				let name = (args[4] || '').trim();
				let type = (args[6] || '').trim();
				let desc = (args[7] || '').trim();

				if (id === 'param') {
					id = 'params';
				} else if (id === 'return') {
					id = 'returns';
				}

				if (id.length === 0 || kIdentifiers.indexOf(id) === -1) {
					if (lastId !== null && kDescAfter.indexOf(lastId) !== -1) {
						let data = this.map.get(lastId);
						data.desc.push(desc);
						this.map.set(lastId);
					} else if (lastDesc !== null) {
						lastDesc.push(desc);
					} else {
						lastDesc = [desc];
					}
				} else {
					// crate data object
					let data = { name, type, desc: [] };
					if (desc.length !== 0) {
						data.desc.push(desc);
					}

					// add description to next id that supports descriptions
					if (kDescBefore.indexOf(id) !== -1 && lastDesc !== null) {
						data.desc = lastDesc.concat(data.desc);
						lastDesc = null;
					}
					//console.log('add', id, data);

					// track last id in case we are left
					// with an extra description
					lastId = id;

					// add to existing map or add to a new one
					if (this.map.has(id)) {
						data = this.map.get(id);
						data.push(data);
					} else {
						data = [data];
					}
					this.map.set(id, data);
				}
			});

			if (lastDesc !== null && lastId !== null) {
				let data = this.map.get(lastId);
				data.desc = lastDesc.concat(data.desc);
				this.map.set(lastId);
			}
		});
	}

	get isClass() {
		return this.map.has('class');
	}

	get isModule() {
		return this.map.has('module');
	}

	get isPrivate() {
		return this.map.has('private');
	}

	get isProtected() {
		return this.map.has('protected');
	}

	get isPublic() {
		return this.map.has('public');
	}

	get isStatic() {
		return this.map.has('static');
	}

	get isReadOnly() {
		return this.map.has('readonly');
	}

	get isOptional() {
		return this.map.has('optional');
	}

	get isRequired() {
		return this.map.has('required');
	}

	get isChainable() {
		return this.map.has('chainable');
	}

	get isAsync() {
		return this.map.has('async');
	}

	get isProperty() {
		return this.map.has('property');
	}

	get isMethod() {
		return this.map.has('method');
	}

	getProperty(key) {
		return this.getPropertyArrray(key)[0];
	}

	getPropertyArrray(key) {
		let arr = this.map.get(key);
		if (arr === undefined || arr === null) {
			arr = [];
		}
		return arr;
	}
}
