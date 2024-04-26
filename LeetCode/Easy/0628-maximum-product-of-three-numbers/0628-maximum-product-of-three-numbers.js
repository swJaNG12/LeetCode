/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    nums.sort((a,b) => a-b);
    let max1 = nums[0] * nums[1] * nums[nums.length - 1];
    let max2 = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]
    return max1 >= max2 ? max1 : max2;
};