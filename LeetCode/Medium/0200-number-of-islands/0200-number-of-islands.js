/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const m = grid.length, n = grid[0].length;
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const queue = [];
  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        count++;

        queue.push([i, j]);
        while (queue.length !== 0) {
          const [currRow, currCol] = queue.shift();
          for (const [dr, dc] of directions) {
            const nodeRow = currRow + dr, nodeCol = currCol + dc;
            if (nodeRow >= 0 && nodeRow < m && nodeCol >= 0 && nodeCol < n && grid[nodeRow][nodeCol] === '1') {
              queue.push([nodeRow, nodeCol]);
              grid[nodeRow][nodeCol] = '0';
            }
          }
        }
      }

    }
  }
  return count;
};