const test = require('tape');
const r = require('../lib');

test('filter an array for items', (assert) => {
  const actual = r.filter([1, 2, 3, 4, 5], item => item >= 3);
  const expected = [3, 4, 5];

  assert.deepEqual(actual, expected);
  assert.end();
});
