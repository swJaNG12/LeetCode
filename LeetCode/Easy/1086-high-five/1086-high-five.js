/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
  const socreObj = {};
  const result = [];

  for(let i = 0; i < items.length; i++) {
    const [id, score] = items[i];
    if(socreObj[id]) socreObj[id].push(score);
    else socreObj[id] = [score];
  }
  for(let i = 1; i <= 1000; i++) {
    if(socreObj[i]) {
      const avg = Math.floor(socreObj[i].sort((a,b) => b-a).slice(0,5).reduce((a,c) => a + c,0) / 5)
      result.push([i, avg]);
    }
  }
  return result;
};