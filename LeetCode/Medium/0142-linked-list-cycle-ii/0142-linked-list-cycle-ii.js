/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Floyd's Tortoise and Hare Algorithm
var detectCycle = function(head) {
  if(head === null) return null;
  let slow = head, fast = head;

  while(fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if(slow === fast) {
      slow = head;
      while(fast !== slow) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
};

// hash map
// var detectCycle = function(head) {
//   const set = new Set();

//   while(head !== null) {
//     if(set.has(head)) return head;
//     set.add(head);
//     head = head.next;
//   }
//   return null;
// };
