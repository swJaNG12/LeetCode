/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  const totalSum = nums.reduce((a, c) => a + c, 0);
  let leftSum = 0;
  
  for(let i = 0; i < nums.length; i++) {
    if(leftSum === totalSum - nums[i] - leftSum) {
      return i;
    }
    leftSum += nums[i];
  }
  
  return -1;
};