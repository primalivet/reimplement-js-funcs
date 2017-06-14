const test = require('tape');
const r = require('../lib');

test('check if value is included in an array', (assert) => {
  const actual = r.includes([1, 2, 3, 4, 5], 3);
  const expected = true;

  assert.equal(actual, expected);
  assert.end();
});
