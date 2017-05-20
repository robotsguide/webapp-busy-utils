/* eslint-env node */

const fs = require('fs');
const RSVP = require('rsvp');
const DefinedProperty = require('./defined-property');

module.exports = class FileParser {

	constructor(path) {
		this.filePath = this.buildFilePath(path);
	}

	buildFilePath(path) {
		path = './' + path + '.js';
		path = path.replace(/\/\//g, '/');
		path = path.replace(/\.js/g, '.js');
		return path;
	}

	fetch() {
		return new RSVP.Promise((resolve, reject) => {
			fs.readFile(this.filePath, 'utf8', (err, file) => {
				if (err !== null && err !== undefined) {
					reject(err);
				} else {
					resolve(file);
				}
			});
		});
	}

	scrapeComments(file) {
		const data = [];
		const reg = new RegExp("\\/\\*\\*((?!\\*\\/)[\\s\\S])*\\*\\/", 'g', 'm');
		file.replace(reg, function(str) {
			str = str.replace(/\n|\t/g, '').replace(/\/\*|\*\//g, '').replace(/\*[ ]*\*/g, '*');

			const comments = [];
			str.replace(/\*([^\*]*)/g, function(line, val) {
				comments.push(val.trim());
			});

			const prop = new DefinedProperty(comments);
			data.push(prop);
		});
		return data;
	}

	getData() {
		return this.fetch().then(file => {
			return this.scrapeComments(file);
		});
	}
};

//function capitalize() {
//	return;
//}
//
//function getClassString(text, type, className, packageName) {
//	// create path string
//	let path = (packageName + '/' + type + '/' + className).replace(/\/\//g, '/');
//
//	// get class name regex
//	path = new RegExp("define\\('" + path + "'");
//	console.log('path', path);
//
//	// remove everything before the class define
//	let idx = text.search(path);
//	text = text.slice(idx + 6);
//
//	// remove everything after the next define(
//	idx = text.search(/define\(/);
//	text = text.slice(0, idx);
//
//	// remove anything left ofer after this class
//	idx = text.lastIndexOf('});');
//	text = text.slice(0, idx);
//
//	// return text
//	return text;
//}
//
//function log(...args) {
//	window.console.log(...args);
//}
//
//function logMethods(data) {
//	log('%cMethods', 'padding-left:20px;color:#6f6f6f;font-size:16px');
//
//	const propLogger = function(name='', desc=[], type='', typeDef='', params=[]) {
//		log(`%c${name} %c${type} %c${capitalize(typeDef)}`, 'padding-left:60px;color:#64b160;font-size:12px;', 'color:#a28800;font-size:12px;', 'color:#6e6e6e;font-size:12px;');
//		desc.forEach(d => log(`%c${d}`, 'padding-left:80px;padding-bottom:15px;color:#8e8e8e;'));
//		log('%cParams:', 'color:#6f6f6f;padding-left:80px');
//		params.forEach(item => {
//			log('%c' + item.name + ' %c' + item.type + ' %c' + capitalize(item.desc), 'padding-left:100px;color:#6a95b9', 'color:#a28800;', 'color:#8e8e8e;');
//		});
//	};
//
//	const _private = data.filterBy('isPrivate');
//	const _protected = data.filterBy('isProtected');
//	const _public = data.filterBy('isPublic');
//
//	if (_private.get('length')) {
//		log('%cPrivate', 'padding-left:40px;color:#d65151;font-size:10px;text-decoration:underline;');
//		_private.forEach(item => propLogger(item.get('name'), item.get('desc'), item.get('return.type'), item.get('return.desc'), item.get('params')));
//	}
//
//	if (_protected.get('length')) {
//		log('%cProtected', 'padding-left:40px;color:#fcbf12;font-size:10px;text-decoration:underline;');
//		_protected.forEach(item => propLogger(item.get('name'), item.get('desc'), item.get('return.type'), item.get('return.desc'), item.get('params')));
//	}
//
//	if (_public.get('length')) {
//		log('%cPublic', 'padding-left:40px;color:#798fa7;font-size:10px;text-decoration:underline;');
//		_public.forEach(item => propLogger(item.get('name'), item.get('desc'), item.get('return.type'), item.get('return.desc'), item.get('params')));
//	}
//}
//
//function logProps(data) {
//	log('%cProperties', 'padding-left:20px;color:#6f6f6f;font-size: 16px');
//
//	const propLogger = function(name='', desc=[], type='', typeDef='') {
//		log(`%c${name} %c${type} %c${capitalize(typeDef)}`, 'padding-left:60px;color:#64b160;font-size:12px;', 'color:#a28800;font-size:12px;', 'color:#6e6e6e;font-size:12px;');
//		desc.forEach(d => log(`%c${d}`, 'padding-left:80px;padding-bottom:15px;color:#8e8e8e;'));
//	};
//	const _private = data.filterBy('isPrivate');
//	const _protected = data.filterBy('isProtected');
//	const _public = data.filterBy('isPublic');
//
//	if (_private.get('length')) {
//		log('%cPrivate', 'padding-left:40px;color:#d65151;font-size:10px;text-decoration:underline;');
//		_private.forEach(item => propLogger(item.get('name'), item.get('desc'), item.get('type.name'), item.get('type.desc')));
//	}
//
//	if (_protected.get('length')) {
//		log('%cProtected', 'padding-left:40px;color:#fcbf12;font-size:10px;text-decoration:underline;');
//		_protected.forEach(item => propLogger(item.get('name'), item.get('desc'), item.get('type.name'), item.get('type.desc')));
//	}
//
//	if (_public.get('length')) {
//		log('%cPublic', 'padding-left:40px;color:#798fa7;font-size:10px;text-decoration:underline;');
//		_public.forEach(item => propLogger(item.get('name'), item.get('desc'), item.get('type.name'), item.get('type.desc')));
//	}
//}
//
//function logComments(className, data) {
//	const props = data.filterBy('isProperty', true);
//	const methods = data.filterBy('isMethod', true);
//
//	log('\n\n');
//	log('%c----------------------------------------------------------------------', 'color:#30aeef');
//	log('%c' + className, 'padding-left:20px;color:#30aeef;font-size:20px;')
//	log('%c----------------------------------------------------------------------', 'color:#30aeef');
//	log('\n\n');
//
//	// log properties
//	logProps(props);
//
//	log('\n\n')
//
//	// log methods
//	logMethods(methods);
//
//	log('\n\n');
//	log('%c----------------------------------------------------------------------', 'color:#30aeef');
//	log('\n\n');
//}
//
//
//function helpDoc(className, type='components', packageName='busy-app') {
//	//Assert.isString(className);
//	//Assert.isString(type);
//	//Assert.isString(packageName);
//
//	const host = window.location.href;
//	//Ember.$.ajax({
//	//	url: host + 'assets/' + (packageName !== 'busy-app' ? 'vendor' : packageName) + '.js',
//	//	dataType: 'text'
//	//}).done(text => {
//	//	// parse the file for the class
//	//	text = getClassString(text, type, className, packageName);
//
//	//	// get comment data
//	//	const data = parseComments(text);
//
//	//	logComments(className, data);
//	//});
//}
