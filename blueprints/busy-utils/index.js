/* eslint-env node */
module.exports = {
	normalizeEntityName() {},

	afterInstall() {
		return this.addAddonsToProject({
			packages: [
				{
					name: "ember-moment",
					target: "7.3.0"
				},
				{
					name: "ember-uuid",
					target: "1.0.0"
				}
			]
		});
	}
};
