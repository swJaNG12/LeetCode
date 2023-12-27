/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  const originalOrder = [...heights];
  let count = 0;
  heights.sort((a,b) => a-b).forEach((num,i) => {
    originalOrder[i] !== num ? count += 1 : null;
  });
  return count;
};