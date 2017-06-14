function compact(array) {
  if (!Array.isArray(array)) {
    throw Error(`${array} should be an Array, it's not.`);
  }
  const result = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] != false) {
      result.push(array[i]);
    }
  }

  return result;
}

module.exports = compact;
