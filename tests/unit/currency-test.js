import Currency from 'busy-utils/currency';
import { module, test } from 'qunit';
import Ember from 'ember';

module('Unit | Utility | Currency');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.ok(Currency);
  assert.ok(Currency.codes);
  assert.ok(Currency.code);
  assert.ok(Currency.country);
  assert.ok(Currency.number);
  assert.ok(Currency.countries);
});

test('codes', function(assert) {
	const codes = Currency.codes();

  assert.ok(Ember.isArray(codes), 'codes() returns an array');
});

test('code', function(assert) {
	const code = Currency.code('USD');

  assert.ok(!Ember.isNone(code) && typeof code === 'object', 'code returns an object');
	assert.ok(!Ember.isNone(code) && code.get('symbol') === '$', 'code returns object with symbol');
});

test('country', function(assert) {
	const country = Currency.country('USD');

  assert.ok(Ember.isArray(country), 'country returns a list of countries');
});

test('number', function(assert) {
	const code = Currency.number(840);

  assert.ok(!Ember.isNone(code) && typeof code === 'object', 'code returns an object');
	assert.ok(!Ember.isNone(code) && code.get('symbol') === '$', 'code returns object with symbol');
});

test('countries', function(assert) {
	const countries = Currency.countries();

  assert.ok(Ember.isArray(countries), 'countries returns a list of all countries');
});
