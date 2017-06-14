const test = require('tape');
const r = require('../lib');

test('curry a regular function', (assert) => {
  const add = (n1, n2, n3) => n1 + n2 + n3;
  const curried = r.curry(add);

  const actual = curried(6)(6)(6);
  const expected = 18;

  assert.equal(actual, expected);
  assert.end();
});
