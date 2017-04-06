/* eslint-env node */
module.exports = {
	normalizeEntityName() {},

	afterInstall() {
		return this.addAddonToProject("ember-moment", "~7.3.0").then(() => {
			return this.addAddonToProject("ember-uuid", "~1.0.0");
		});
	}
};
