/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
  arr.sort((a,b) => a-b);
  const d = arr[1] - arr[0];

  for(let i = 1; i < arr.length; i++) {
    if((arr[i] - arr[i-1]) !== d) return false;
  }
  return true;
};