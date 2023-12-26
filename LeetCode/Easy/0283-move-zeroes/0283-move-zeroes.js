/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let writePointer = 0;
  if(!nums.includes(0)) return nums;
  
  for(let readPointer = 1; readPointer < nums.length; readPointer++) {
    if(nums[readPointer] !== 0) {
      if(nums[writePointer] === 0) {
        let temp = nums[writePointer]
        nums[writePointer] = nums[readPointer];
        nums[readPointer] = temp;
        writePointer++;
      } else {
        writePointer++;
        let temp = nums[writePointer]
        nums[writePointer] = nums[readPointer];
        nums[readPointer] = temp;
      }
    }
  }
  
  return nums;
};