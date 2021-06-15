import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | exhibition', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:exhibition');
    assert.ok(route);
  });
});
