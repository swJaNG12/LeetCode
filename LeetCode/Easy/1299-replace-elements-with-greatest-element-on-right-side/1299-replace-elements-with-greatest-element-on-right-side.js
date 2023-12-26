/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  const len = arr.length;
  let max = arr[len - 1];

  if(len === 1) {
    arr[0] = -1;
    return arr;
  }

  for(let i = len - 2; i >= 0; i--) {
    let curr = arr[i];
    arr[i] = max;
    if(max < curr) max = curr;
  }
  arr[len - 1] = -1;
  return arr;
};