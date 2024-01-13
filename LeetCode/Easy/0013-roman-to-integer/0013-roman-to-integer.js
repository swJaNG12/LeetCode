/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (romanMap[s[i + 1]] > romanMap[s[i]]) {
      result -= 2 * romanMap[s[i]];
    }
    result += romanMap[s[i]]
  }
  return result;
};