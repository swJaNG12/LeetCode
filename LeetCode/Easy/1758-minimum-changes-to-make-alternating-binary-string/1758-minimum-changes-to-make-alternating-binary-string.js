/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
  let count = 0;
  for(let i = 0; i < s.length; i++) {
    if(i % 2 === 0 && s[i] === '1') count++;
    if(i % 2 === 1 && s[i] === '0') count++;
  }

  return Math.min(count, s.length - count);
};