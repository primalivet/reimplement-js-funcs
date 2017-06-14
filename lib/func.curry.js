function curry(fn) {
  // number of arugments the function
  // which we're going to curry takes
  const arity = fn.length;

  // return the IIFE resolver and spread 'arguments' into an array, args1
  return (function resolver(...args1) {
    // save args1 to memory
    const memory = [...args1];
    // return an anonymous function and spread 'arguments' into an array, args2
    return (...args2) => {
      // copy args2 and memory into a local array
      const local = [...memory, ...args2];
      // assign the next function to be either the function that returns a
      // value or the resolver that returns another function if the local
      // arguments is less than expectet (arity)
      const next = local.length >= arity ? fn : resolver;
      // return next and spread the local array of arguments.
      return next(...local);
    };
  }());
}

module.exports = curry;
