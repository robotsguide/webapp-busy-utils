import locale from 'busy-utils/locale';
import { module, test } from 'qunit';

module('Unit | Utility | loc');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = locale;
  assert.ok(result);
});

test('format', function(assert) {

  const str = 'MMM Do h:mm A';
  const result = 'll h:hh a';

	// test english returns the passed in string
  assert.ok(locale.format(str) === str);

	// test spanish returns the spanish string
  assert.ok(locale.format(str, 'es') === result);
});
