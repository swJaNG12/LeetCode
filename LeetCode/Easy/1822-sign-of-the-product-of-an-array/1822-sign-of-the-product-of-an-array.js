/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
  return nums.map(num => {
    if(num > 0) return 1;
    else if(num < 0) return -1;
    else return 0;
  }).reduce((a,c) => a*c);
};