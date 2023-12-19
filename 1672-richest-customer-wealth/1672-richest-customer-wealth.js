/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const wealthArr = accounts.map(account => {
      return account.reduce((a,c) => a + c, 0);
    })

    return Math.max(...wealthArr);
};