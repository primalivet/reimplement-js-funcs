const test = require('tape');
const r = require('../lib');

test('returns an array or array chunks', (assert) => {
  const actual = r.flattenDeep([1, [2, [3, [4, 5, 6]]], 7, [8]]);
  const expected = [1, 2, 3, 4, 5, 6, 7, 8];

  assert.deepEqual(actual, expected);
  assert.end();
});
