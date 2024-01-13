/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  const result = [];
  operations.forEach(op => {
    if (op === 'C') result.pop();
    else if (op === 'D') result.push(result[result.length - 1] * 2);
    else if (op === '+') {
      const sum = result[result.length - 1] + result[result.length - 2]
      result.push(sum);
    } else result.push(parseInt(op));
  })
  return result.reduce((a,c) => a+c, 0);
};