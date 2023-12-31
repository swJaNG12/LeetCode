/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  arr.forEach((num, i) => {
    arr[i] = fn(arr[i] ,i);
  })
  return arr;
};