/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// var addBinary = function(a, b) {
//     return (parseInt(a, 2) + parseInt(b, 2)).toString(2)
// };

var addBinary = function(a,b) {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
}