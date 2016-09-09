import uuid from 'busy-app/uuid';
import { module, test } from 'qunit';

module('Unit | Utility | UUID');

// Replace this with your real tests.
test('it works', function(assert) {
	// test to see if class exists.
	assert.ok(uuid);
});

test('method generate', function(assert) {
	const id = uuid.generate();

	// assert generate method created a valid uuid
	assert.equal(uuid.isValid(id), true);
});

test('method isValid', function(assert) {
	// test isvalid with a valid uuid. result should be true.
	const validId = "8d594d76-61ee-4b9c-97b8-3ab1becee083";
	assert.equal(uuid.isValid(validId), true);

	// test isValid with an invalid uuid. result should be false.
	const invalidId = "8d594d76-61ee-4b9c-97b83-ab1becee08";
	assert.equal(uuid.isValid(invalidId), false);
});
