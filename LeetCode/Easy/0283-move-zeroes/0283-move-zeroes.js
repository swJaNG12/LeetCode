/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let writePointer = 0;

  for(let readPointer = 0; readPointer < nums.length; readPointer++) {
    if(nums[readPointer] !== 0) {
      let temp = nums[writePointer];
      nums[writePointer] = nums[readPointer];
      nums[readPointer] = temp;
      writePointer++;
    }
  }
  
  return nums;
};