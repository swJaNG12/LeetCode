/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const alphanumericOnly = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  return alphanumericOnly === alphanumericOnly.split('').reverse().join(''); 
};