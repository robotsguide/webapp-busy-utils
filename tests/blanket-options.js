/* globals blanket, module */

var options = {
  modulePrefix: 'busy-utils',
  filter: '//.*busy-utils/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [],
  enableCoverage: true,
  cliOptions: {
		lcovOptions: {
			outputFile: 'lcov.info',
		},
    reporters: ['lcov'],
    autostart: false
  }
};
if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
