/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
  let TimerId;
  return function (...args) {
    if (TimerId !== null) {
      clearTimeout(TimerId);
    }
    TimerId = setTimeout(() => {
      fn(...args);
      TimerId = null;
    }, t);

  }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */