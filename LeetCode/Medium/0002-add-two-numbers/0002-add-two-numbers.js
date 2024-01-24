/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let p1 = l1, p2 = l2;
  let num1 = '', num2 = '', numsArr;
  let sum;

  while(p1 !== null) {
    num1 += p1.val;
    p1 = p1.next
  }
  while(p2 !== null) {
    num2 += p2.val;
    p2 = p2.next;
  }
  sum = BigInt(num1.split('').reverse().join('')) + BigInt(num2.split('').reverse().join(''));
  numsArr = String(sum).split('').reverse().map(Number);
  
  let head = new ListNode(numsArr[0]);
  let prev = head;
  for(let i = 1; i < numsArr.length; i++) {
    let curr = new ListNode(numsArr[i]);
    prev.next = curr;
    prev = prev.next;
  }

  return head;
};