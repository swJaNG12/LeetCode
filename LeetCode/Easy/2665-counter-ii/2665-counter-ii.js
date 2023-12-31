/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
  let val = init;
  return {
    reset: function() {
      return val = init;
    },
    increment: function() {
      return ++val;
    },
    decrement: function() {
      return --val;
    }
  }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */