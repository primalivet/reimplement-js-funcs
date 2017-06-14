const test = require('tape');
const r = require('../lib');

test('finds the index of a value in an array', (assert) => {
  const actual = r.indexOf([1, 2, 3, 4, 5], 5);
  const expected = 4;

  assert.equal(actual, expected);
  assert.end();
});
