function map(array, cb) {
  if (!Array.isArray(array)) {
    throw Error(`${array} should be an Array, it's not.`);
  }

  const result = [];

  for (let i = 0; i < array.length; i += 1) {
    result.push(cb(array[i]));
  }
  return result;
}

module.exports = map;
