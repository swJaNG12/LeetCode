/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let node = head;
  let arr = [];

  while(node) {
    arr.push(node.val);
    node = node.next;
  }  

  const middleIdx = Math.floor(arr.length / 2);
  arr = arr.slice(middleIdx);

  let result = new ListNode(arr[0]);
  let currNode = result;

  for(let i = 1; i < arr.length; i++) {
    let newNode = new ListNode(arr[i]);
    currNode.next = newNode;
    currNode = newNode;
  }
  return result;
};