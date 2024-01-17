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
var detectCycle = function(head) {
  const set = new Set();

  while(head !== null) {
    if(set.has(head)) return head;
    set.add(head);
    head = head.next;
  }
  return null;
};

// cycle이 있다면 순환이 시작되는 노드(tail의 next 노드가 가리키는 노드)를 반환,
// cylce이 없다면 null 반환