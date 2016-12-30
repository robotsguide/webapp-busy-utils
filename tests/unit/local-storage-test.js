import localStorage from 'busy-utils/local-storage';
import { module, test } from 'qunit';

module('Unit | Utility | LocalStorage');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.ok(localStorage);
  assert.ok(localStorage.setProperty);
  assert.ok(localStorage.getProperty);
  assert.ok(localStorage.getWithDefault);
  assert.ok(localStorage.hasValue);
  assert.ok(localStorage.remove);
});

test('getWithDefault', function(assert) {
	const defaultValue = 'test';
	const value = 'test-gwd';

	// get a value that doesnt exist and make sure we got the defautl value.
  assert.ok(localStorage.getWithDefault('ls-test-gwd', defaultValue) === defaultValue, 'Get default value returns default');

	localStorage.setProperty('ls-test-gwd', value);

	// get a value that doesnt exist and make sure we got the defautl value.
  assert.ok(localStorage.getWithDefault('ls-test-gwd', defaultValue) === value, 'Get default value returns value');
});

test('getProperty', function(assert) {
	const value = 'test-gp';

	// get a value that doesnt exist and make sure we got the defautl value.
  assert.ok(localStorage.getProperty('ls-test-gp') === null, 'Get property value returns null if not exists');

	localStorage.setProperty('ls-test-gp', value);

  assert.ok(localStorage.getProperty('ls-test-gp') === value, 'Get property value returns null if not exists');
});

test('hasValue', function(assert) {
	const value = 'test-hv';

	// get a value that doesnt exist and make sure we got the defautl value.
  assert.ok(localStorage.hasValue('ls-test-hv') === false, 'hasValue returns false when no value set');

	localStorage.setProperty('ls-test-hv', value);

  assert.ok(localStorage.hasValue('ls-test-hv') === true, 'hasValue returns true when value set');
});

test('remove', function(assert) {
	if (localStorage.hasValue('ls-test-gwd')) {
		localStorage.remove('ls-test-gwd');
		assert.ok(localStorage.hasValue('ls-test-gwd') === false, 'removed value for ls-test-gwd');
	}

	if (localStorage.hasValue('ls-test-gp')) {
		localStorage.remove('ls-test-gp');
		assert.ok(localStorage.hasValue('ls-test-gp') === false, 'removed value for ls-test-gp');
	}

	if (localStorage.hasValue('ls-test-hv')) {
		localStorage.remove('ls-test-hv');
		assert.ok(localStorage.hasValue('ls-test-hv') === false, 'removed value for ls-test-hv');
	}

	localStorage.setProperty('ls-test-rm', 10);
	localStorage.remove('ls-test-rm');
	assert.ok(localStorage.hasValue('ls-test-rm') === false, 'removed value for ls-test-rm');
});
