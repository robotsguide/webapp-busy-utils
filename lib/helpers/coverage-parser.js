#!/usr/bin/env node

/* eslint-env node */

const fs = require('fs');

(function() {
	let file = fs.readFileSync('coverage/lcov.info', { encoding: 'utf-8', flag: 'r+' });
	file = file.replace(/@busybusy\/utils/gm, 'addon');
	fs.writeFileSync('coverage/lcov.info', file, { encoding: 'utf-8' });
})();
