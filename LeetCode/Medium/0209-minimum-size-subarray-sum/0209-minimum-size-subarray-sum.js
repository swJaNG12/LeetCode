/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let start = 0;
  let minLen = Infinity;
  let sum = 0;

  for(let end = 0; end < nums.length; end++) {
    sum += nums[end];
    while(sum >= target) {
      let len = end - start + 1;
      minLen = Math.min(minLen, len);
      sum -= nums[start];
      start++;
    }
  }
  return minLen === Infinity ? 0 : minLen;
};