function filter(array, cb) {
  if (!Array.isArray(array)) {
    throw Error(`${array} should be an Array, it's not.`);
  }

  const result = [];

  for (let i = 0; i < array.length; i += 1) {
    if (cb(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
}

module.exports = filter;
