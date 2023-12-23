/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = (arr) => {
    let idx = 0;
    let len = arr.length
    while(idx < len) {
      if(arr[idx] === 0) {
          for(let i = len - 1; i > idx; i--) {
              arr[i] = arr[i-1];
          }
          idx += 1;
      }
      idx += 1;
    }
}