/* eslint-env node */
module.exports = {
	normalizeEntityName() {},

	afterInstall() {
		return this.addAddonsToProject({"ember-moment": "7.3.0", "ember-uuid": "1.0.0"}).then(() => {
			return this.addPackageToProject("crypto-js@3.1.6");
		});
	}
};
