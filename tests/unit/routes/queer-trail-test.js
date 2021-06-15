import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | queer-trail', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:queer-trail');
    assert.ok(route);
  });
});
