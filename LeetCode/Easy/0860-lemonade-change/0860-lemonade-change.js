/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let five = 0, ten = 0;

  for(let bill of bills) {
    switch(bill) {
      case 5:
        five += 1;
        break;
      case 10: 
        if(five === 0) return false;
        five -= 1;
        ten += 1;
        break;
      case 20:
        if(ten > 0 && five > 0) {
          five -= 1;
          ten -= 1;
        } else if(five >= 3) {
          five -= 3;
        } else return false;
        break;
    }
  }
  return true;
};