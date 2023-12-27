/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  const unique = [...new Set(nums)];
  nums.splice(0, nums.length, ...unique);
  if(nums.length < 3) return Math.max(...nums);
  
  return nums.sort((a,b) => b-a).slice(2)[0];
};