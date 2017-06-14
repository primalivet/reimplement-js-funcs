const r = require('../lib');
const test = require('tape');

test('returns the reduced sum of an array of numbers', (assert) => {
  const actual = r.reduce([1, 2, 3, 4, 5], (total, item) => total + item, 0);
  const expected = 15;

  assert.deepEqual(actual, expected);
  assert.end();
});

test('returns a modified array of objects', (assert) => {
  const actual = r.reduce([
    { value: 100 },
    { value: 200 },
    { value: 300 },
  ], (result, obj) => r.concat(result, Object.assign({}, obj, { doubled: obj.value * 2 })), []);
  const expected = [
    { value: 100, doubled: 200 },
    { value: 200, doubled: 400 },
    { value: 300, doubled: 600 },
  ];

  assert.deepEqual(actual, expected);
  assert.end();
});
