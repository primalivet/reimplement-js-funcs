function flattenDeep(result) {
  return function flatten(array) {
    if (!Array.isArray(array)) {
      throw Error(`${array} should be an Array, it's not.`);
    }

    for (let i = 0; i < array.length; i += 1) {
      if (Array.isArray(array[i])) {
        flatten(array[i]);
      } else {
        result.push(array[i]);
      }
    }

    return result;
  };
}

module.exports = flattenDeep([]);
