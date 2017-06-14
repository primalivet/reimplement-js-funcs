function flatten(array) {
  if (!Array.isArray(array)) {
    throw Error(`${array} should be an Array, it's not.`);
  }

  const result = [];

  for (let i = 0; i < array.length; i += 1) {
    // item is an array
    if (Array.isArray(array[i])) {
      // loop items in the nested array
      for (let j = 0; j < array[i].length; j += 1) {
        // concat each item in the nested array with results array
        result.push(array[i][j]);
      }
    } else {
      // concat to results array.
      result.push(array[i]);
    }
  }

  return result;
}

module.exports = flatten;
