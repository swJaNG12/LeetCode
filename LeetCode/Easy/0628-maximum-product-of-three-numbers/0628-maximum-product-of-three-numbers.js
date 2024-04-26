/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  let min1 = Number.MAX_SAFE_INTEGER, min2 = Number.MAX_SAFE_INTEGER;
  let max1 = Number.MIN_SAFE_INTEGER, max2 = Number.MIN_SAFE_INTEGER, max3 = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    let currnetNum = nums[i];

    if (currnetNum <= min1) {
      min2 = min1;
      min1 = currnetNum;
    } else if (currnetNum <= min2) {
      min2 = currnetNum;
    }

    if (currnetNum >= max1) {
      max3 = max2;
      max2 = max1;
      max1 = currnetNum;
    } else if (currnetNum >= max2) {
      max3 = max2;
      max2 = currnetNum;
    } else if (currnetNum >= max3) {
      max3 = currnetNum;
    }
  }
  const CASE_1 = min1 * min2 * max1;
  const CASE_2 = max1 * max2 * max3;

  return CASE_1 >= CASE_2 ? CASE_1 : CASE_2;
};