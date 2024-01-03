/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let result = '';
  let pointer1 = 0, pointer2 = 0;

  while(pointer1 < word1.length && pointer2 < word2.length) {
    result += word1[pointer1++];
    result += word2[pointer2++];
  }
  result += word1.slice(pointer1) + word2.slice(pointer2);
  return result;
};