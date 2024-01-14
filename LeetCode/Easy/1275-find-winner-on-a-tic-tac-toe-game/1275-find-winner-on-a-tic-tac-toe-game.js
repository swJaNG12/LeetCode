/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
  const table = new Array(3).fill('').map(row => new Array(3).fill(''));  
  
  for(let i = 0; i < moves.length; i++) {
    const [x, y] = moves[i];
    if(i % 2 === 0) table[x][y] = 'X';
    else table[x][y] = 'O';

    if(isWinner(table, 'X')) return 'A';
    if(isWinner(table, 'O')) return 'B';
  }
  return moves.length === 9 ? 'Draw' : 'Pending';
};

var isWinner = function(table, player) {
  for(let i = 0; i < 3; i++) {
    if(table[0][i] === player && table[1][i] === player && table[2][i] === player) return true;
    if(table[i][0] === player && table[i][1] === player && table[i][2] === player) return true;
  }
  if(table[0][0] === player && table[1][1] === player && table[2][2] === player) return true;
  if(table[0][2] === player && table[1][1] === player && table[2][0] === player) return true;

  return false;
}