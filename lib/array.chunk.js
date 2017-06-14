function filter(array, value) {
  if (!Array.isArray(array)) {
    throw Error(`${array} should be an Array, it's not.`);
  }

  const result = [];

  while (array.length > 0) {
    if (array.length >= value) {
      result.push(array.splice(0, value));
    } else {
      result.push(array.splice(0, array.length));
    }
  }

  return result;
}

module.exports = filter;
