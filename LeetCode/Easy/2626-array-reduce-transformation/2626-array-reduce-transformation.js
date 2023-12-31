/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
  if(nums.length === 0) return init;

  let sum = init;
  nums.forEach(num => {
    sum = fn(sum, num);
  })

  return sum;
};