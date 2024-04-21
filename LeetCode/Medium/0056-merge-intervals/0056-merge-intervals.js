/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a,b) => a[0] - b[0]);
  let result = [intervals[0]];
  let k = 0;
  for(let i = 0; i < intervals.length; i++) {
    if(intervals[i][0] <= result[k][1]) {
      let start = result[k][0];
      let end = result[k][1] >= intervals[i][1] ? result[k][1] : intervals[i][1];
      result[k] = [start, end];
    } else {
      result.push(intervals[i]);
      k++;
    }
  }
  return result;
};