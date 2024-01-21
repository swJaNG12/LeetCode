/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let slow = head, fast = head;

  while(fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  slow = reverseList(slow);

  while(slow !== null) {
    if(head.val !== slow.val) return false;
    slow = slow.next;
    head = head.next;
  }
  return true;
};

var reverseList = function(node) {
  let prev = null, curr = node;
  while(curr !== null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
}

