/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
  let left = 0, right = nums.length - 1;

  while(left <= right) {
    if(nums[left] % 2 === 0) left++;
    else if(nums[right] % 2 === 1) right--;
    else {
      const temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;

      left++;
      right--;
    }
  }

  return nums;
};