/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
  const m = img.length;
  const n = img[0].length;
  const result = new Array(m).fill(0).map(() => new Array(n).fill(0));
  const directions = [[-1,-1], [-1,0], [-1, 1], [0,-1], [0, 1], [1,-1], [1,0], [1,1]]

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {

      let sum = img[i][j];
      let count = 1;
      for(let [dx, dy] of directions) {
        const x = i + dx, y = j + dy;
        if(x >= 0 && x < m && y >= 0 && y < n) {
          sum += img[x][y];
          count++;
        }
      }
      result[i][j] = Math.floor(sum / count);
    }
  }
  return result;
};
