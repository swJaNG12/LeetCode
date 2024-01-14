/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  return nums.sort((a, b) => a - b)
    .filter((_, i) => i % 2 === 0)
    .reduce((a, c) => a + c, 0);
};