/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function (x, y) {
  const moves = [
    [-2, -1], [-1, -2], [1, -2], [2, -1],
    [2, 1], [1, 2], [-1, 2], [-2, 1]
  ];
  let queue = [[0, 0, 0]];
  let visited = new Set(['0,0']);

  while(queue.length > 0) {
    let [curX, curY, step] = queue.shift();

    if(curX === x && curY === y) return step;

    for(let [dx, dy] of moves) {
      let newX = curX + dx;
      let newY = curY + dy;
      let newPos = `${newX},${newY}`;

      if(!visited.has(newPos)) {
        visited.add(newPos);
        queue.push([newX, newY, step + 1]);
      }
    }
  }
};