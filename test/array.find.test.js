const test = require('tape');
const r = require('../lib');

test('find values in an array', (assert) => {
  const actual = r.find([1, 2, 3, 4, 5], 5);
  const expected = 5;

  assert.equal(actual, expected);
  assert.end();
});
