/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  let m = mat.length,
    n = mat[0].length;
  let row = 0,
    col = 0,
    direction = 1;
  const result = [];

  while (result.length < m * n) {
    result.push(mat[row][col]);
    // upward right
    if (direction > 0) {
      if (col === n - 1) {
        row++;
        direction = -1;
      } else if (row === 0) {
        col++;
        direction = -1;
      } else {
        // move
        row--;
        col++;
      }
    }
    // downward left
    else {
      if (row === m - 1) {
        col++;
        direction = 1;
      } else if (col === 0) {
        row++;
        direction = 1;
      } else {
        // move
        row++;
        col--;
      }
    }
  }

  return result;
};
