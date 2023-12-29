/**
 * @param {string} s
 * @return {boolean}
 */


var isValid = function (s) {
  const stack = [];
  const brackets = new Map([
    [')', '('],
    ['}', '{'],
    [']', '[']
  ])

  for(let i = 0; i < s.length; i++) {
    if(brackets.has(s[i])) {
      if(stack.length === 0) return false;
      if(stack.pop() !== brackets.get(s[i])) return false;
      
    } else stack.push(s[i])
  }

  return stack.length === 0;
};