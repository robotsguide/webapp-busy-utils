/* eslint-env node */
module.exports = {
	normalizeEntityName() {},

	afterInstall() {
		return this.addAddonsToProject({
			packages: [
				"ember-moment@~7.3.0",
				"ember-uuid@~1.0.0"
			]
		});
	}
};
