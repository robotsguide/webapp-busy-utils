
import Ember from 'ember';
import SHA256 from 'npm:crypto-js/sha256';

const Hash = Ember.Object.create();

Hash.reopenClass({
	sha256() {
		return SHA256.apply(SHA256, arguments);
	}
});

export default Hash;
