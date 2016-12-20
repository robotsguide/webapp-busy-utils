import hash from 'busy-utils/hash';
import { module, test } from 'qunit';

module('Unit | Utility | UUID');

// Replace this with your real tests.
test('it works', function(assert) {
	// test to see if class exists.
	assert.ok(hash);
	assert.ok(typeof hash.sha256 === 'function');
});
