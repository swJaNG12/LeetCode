/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
  let number = num;
  let count = 0;

  while(number > 0) {
    if(number % 2 === 0) number /= 2;
    else number -= 1
    count++;
  }

  return count;
};