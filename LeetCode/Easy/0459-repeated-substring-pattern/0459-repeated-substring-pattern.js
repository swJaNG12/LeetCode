/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  let str = s + s;
  let newStr = str.slice(1, -1);
  return newStr.includes(s);
};


// abcdeabcde