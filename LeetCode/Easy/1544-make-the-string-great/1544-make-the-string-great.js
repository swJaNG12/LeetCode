/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  let stack = [''];

  for (let i = 0; i < s.length; i++) {
    if (check(stack[stack.length - 1], s[i])) {
      stack.pop();
    } else {
      stack.push(s[i])
    }
  }
  return stack.join('');
};

function check(str1, str2) {
  return (str1 !== str2) && (str1.toUpperCase() === str2.toUpperCase());
}