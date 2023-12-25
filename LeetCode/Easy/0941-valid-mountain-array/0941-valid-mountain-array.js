/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  const top = Math.max(...arr);
  const len = arr.length;
  if(arr.indexOf(top) !== arr.lastIndexOf(top)) return false;
  
  const topIdx = arr.indexOf(top);
  if(topIdx === 0 || topIdx === len - 1) return false;
  
  for(let i = 1; i <= topIdx; i++) {
    if(arr[i-1] >= arr[i]) return false;
  }
  for(let j = topIdx + 1; j < len; j++) {
    if(arr[j-1] <= arr[j]) return false;
  }
  
  return true;
};