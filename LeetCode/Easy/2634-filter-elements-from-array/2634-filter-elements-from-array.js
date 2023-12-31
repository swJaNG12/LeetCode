/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  const result = [];
  arr.forEach((num, i) => {
    if(fn(arr[i], i)) result.push(arr[i]);
  })
  return result;
};