/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  const pos = [0, 0];

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'U') pos[1] += 1;
    else if (moves[i] === 'D') pos[1] -= 1;
    else if (moves[i] === 'R') pos[0] += 1;
    else if (moves[i] === 'L') pos[0] -= 1;
  }
  return pos.every(v => v === 0);
};