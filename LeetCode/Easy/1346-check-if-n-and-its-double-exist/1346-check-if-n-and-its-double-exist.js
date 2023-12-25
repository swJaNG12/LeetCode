/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  for(let j = 0; j < arr.length; j++) {
    for(let i = 0; i < arr.length; i++) {
      if(i !== j) {
        if(arr[i] === 2 * arr[j]) return true;
      }
    }
  }
  return false;
};