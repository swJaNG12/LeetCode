/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if(strs.length === 1) return strs[0];

  let prefixLength = strs[0].length;
  for(let i = 1; i < strs.length; i++) {

    for(let j = 0; j < prefixLength; j++) {
      if(strs[0][j] !== strs[i][j]) {
        prefixLength = j;
        break;
      }
    }
    prefixLength = Math.min(prefixLength, strs[i].length);

  }
  return strs[0].slice(0, prefixLength)
};