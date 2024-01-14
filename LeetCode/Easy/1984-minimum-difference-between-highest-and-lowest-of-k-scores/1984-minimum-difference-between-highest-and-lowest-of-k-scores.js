/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  if (k === 1 || nums.length === 1) return 0;

  nums.sort((a, b) => a - b);
  let min = Infinity;

  for (let i = 0; i < nums.length - k + 1; i++) {
    let diff = nums[i + k - 1] - nums[i];
    if (diff < min) min = diff;
  }
  return min;
};