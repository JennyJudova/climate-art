import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | audio-archive', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:audio-archive');
    assert.ok(route);
  });
});
