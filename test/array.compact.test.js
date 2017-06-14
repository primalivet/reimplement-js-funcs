const test = require('tape');
const r = require('../lib');

test('returns an array striped out of falsy values', (assert) => {
  const actual = r.compact([0, 1, false, 2, '', 3]);
  const expected = [1, 2, 3];

  assert.deepEqual(actual, expected);
  assert.end();
});
