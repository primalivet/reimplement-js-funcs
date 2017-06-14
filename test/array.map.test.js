const test = require('tape');
const r = require('../lib');

test('runs the values of an array through a callback function and returns a new array', (assert) => {
  const actual = r.map([1, 2, 3, 4, 5], item => item + 1);
  const expected = [2, 3, 4, 5, 6];

  assert.deepEqual(actual, expected);
  assert.end();
});
