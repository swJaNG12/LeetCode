/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  let count = 0;
  nums.forEach(num => {
    const digits = String(num).split('').length;
    if(digits % 2 === 0) count++;
  })
  
  return count;
};