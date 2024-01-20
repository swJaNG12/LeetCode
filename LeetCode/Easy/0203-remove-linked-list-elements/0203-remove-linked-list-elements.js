/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy, curr = head;

  while(curr !== null) {
    if(curr.val === val) {
      prev.next = curr.next;
    }
    else prev = prev.next;
    curr = curr.next;
  }
  return dummy.next;
};