/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let node = head;
  let listSize = 0;
  while(node) {
    listSize++;
    node = node.next;
  }
  node = head;

  if(listSize === n) {
    return node.next;
  } else if(n === 1) {
    let prev = head;
    while(prev.next !== null) {
      if(prev.next.next === null) {
        prev.next = null;
        return node;
      }
      prev = prev.next;
    }
    return new ListNode;
  } else {
    let prev = head;
    for(let i = 0; i < listSize - n - 1; i++) {
      prev = prev.next;
    }
    prev.next = prev.next.next;
    return node;
  }

};