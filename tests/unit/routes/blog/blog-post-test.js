import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | blog/blog-post', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:blog/blog-post');
    assert.ok(route);
  });
});
