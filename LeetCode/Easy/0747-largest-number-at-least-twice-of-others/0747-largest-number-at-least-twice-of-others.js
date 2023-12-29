/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  const arr = [...nums].sort((a,b) => b-a);
  
  const first = arr[0];
  const second = arr[1];

  return first >= second * 2 ? nums.indexOf(first) : -1;
};