/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const n = nums.length;
  k = k % n;

  // entire revese
  reverse(nums, 0, n - 1);

  // reverse subarray
  reverse(nums, 0, k - 1);

  // reverse subarray
  reverse(nums, k, n - 1);
};

var reverse = function(arr, start, end) {
  while(start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}