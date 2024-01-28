/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
  const queue = [];
  const m = rooms.length, n = rooms[0].length;
  const directions = [[0,1], [0,-1],[1,0],[-1,0]];
  const INF = 2147483647;

  // find gates
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(rooms[i][j] === 0) queue.push([i,j]);
    }
  }

  while(queue.length !== 0) {
    const [currRow, currCol] = queue.shift();
    for(const [dr, dc] of directions) {
      const nodeRow = currRow - dr, nodeCol = currCol - dc;
      if(nodeRow >= 0 && nodeRow < m && nodeCol >=0 && nodeCol < n && rooms[nodeRow][nodeCol] === INF) {
        queue.push([nodeRow, nodeCol]);
        rooms[nodeRow][nodeCol] = rooms[currRow][currCol] + 1;
      }
    }
  }
};