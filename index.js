/* eslint-env node */
'use strict';

module.exports = {
  name: 'busy-utils',

  included(app) {
    this._super.included(app);

		// see: https://github.com/ember-cli/ember-cli/issues/3718
		while (typeof app.import !== 'function' && app.app) {
			app = app.app;
		}

		this.app = app;
  }
};
