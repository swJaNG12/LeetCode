/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if(prices.length === 1) return 0;
  let min = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) min = prices[i];
    if(maxProfit < prices[i] - min) {
      maxProfit = prices[i] - min
    }
  }
  return maxProfit
};