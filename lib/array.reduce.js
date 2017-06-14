function reduce(array, cb, sum) {
  if (!Array.isArray(array)) {
    throw Error(`${array} should be an Array, it's not.`);
  }

  let result = sum;

  for (let i = 0; i < array.length; i += 1) {
    result = cb.call(undefined, result, array[i], i, array);
  }

  return result;
}

module.exports = reduce;
