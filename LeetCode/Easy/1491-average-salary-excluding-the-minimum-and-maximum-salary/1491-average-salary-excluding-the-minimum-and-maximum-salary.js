/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    const max = Math.max(...salary);
    const min = Math.min(...salary);
    const sum = salary.reduce((a,c) => a+c, 0) - (max + min);
    return sum / (salary.length - 2);
};