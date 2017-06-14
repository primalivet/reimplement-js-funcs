function concat() {
  const args = Array.prototype.slice.call(arguments);
  const array = args.shift();
  const values = args;
  if (!Array.isArray(array)) {
    throw Error(`${array} should be an Array, it's not.`);
  }

  for (let i = 0; i < values.length; i += 1) {
    if (Array.isArray(values[i])) {
      for (let j = 0; j < values[i].length; j += 1) {
        array.push(values[i][j]);
      }
    } else {
      array.push(values[i]);
    }
  }

  return array;
}

module.exports = concat;
