/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let dp = [0];
  for(let i = 1; i <= n; i++) {
    dp[i] = dp[Math.floor(i/2)] + (i & 1);
  }
  return dp;
};