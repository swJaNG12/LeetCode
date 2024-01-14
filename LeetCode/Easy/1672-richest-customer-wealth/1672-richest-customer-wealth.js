/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let richest = 0;
  accounts.forEach(person => {
    const total = person.reduce((a,c) => a+c, 0);
    if(total > richest) richest = total;
  }) 
  return richest;
};