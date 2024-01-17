/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
  let count = 0;
  const total = high - low + 1
  if(total % 2 === 0) return total / 2;
  else {
    if(low % 2 === 0) return Math.floor(total / 2);
    else return Math.ceil(total / 2);
  }
};