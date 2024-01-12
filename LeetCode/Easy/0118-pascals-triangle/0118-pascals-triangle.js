/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const triangle = [[1] , [1,1]];
  if(numRows === 1) return [triangle[0]];
  if(numRows === 2) return triangle;

  let row = 2;
  while(numRows > row) {
    const rowArr = new Array(row + 1).fill(1);
    for(let i = 1; i < rowArr.length - 1; i++) {
      rowArr[i] = triangle[row - 1][i] + triangle[row - 1][i - 1];
    }
    triangle.push(rowArr);
    row++;
  }
  return triangle;
};