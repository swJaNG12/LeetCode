/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  s.split('').forEach(str => t = t.replace(str, ''));
  return t;
};