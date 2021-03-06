function includes(array, value) {
  if (!Array.isArray(array)) {
    throw Error(`${array} should be an Array, it's not.`);
  }

  let result = false;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      result = true;
    }
  }

  return result;
}

module.exports = includes;
