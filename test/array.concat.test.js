const test = require('tape');
const r = require('../lib');

test('returns an array with the values concatenated', (assert) => {
  const actual = r.concat([0], 'string', [1, [2]], { key: 'value' }, 2);
  const expected = [0, 'string', 1, [2], { key: 'value' }, 2];

  assert.deepEqual(actual, expected);
  assert.end();
});
