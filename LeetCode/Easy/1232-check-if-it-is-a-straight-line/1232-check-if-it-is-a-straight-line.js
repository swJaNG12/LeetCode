/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
  const deltaX = coordinates[1][0] - coordinates[0][0];
  const deltaY = coordinates[1][1] - coordinates[0][1];

  for(let i = 2; i < coordinates.length; i++) {
    const currentDeltaX = coordinates[i][0] - coordinates[0][0];
    const currentDeltaY = coordinates[i][1] - coordinates[0][1];

    if(deltaX * currentDeltaY !== deltaY * currentDeltaX) return false;
  }
  return true;
};