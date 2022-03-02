/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

//  输入: 1->2->3->4->5->NULL
//  输出: 5->4->3->2->1->NULL
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let pre = null; // 设置一个前置节点 值为null
  let cur = head; // 当前节点为head

  while (cur) {
    // 当cur 存在，也就是说，指针往后走有节点存在

    // next 节点就是当前节点的下一个节点，也就是 cur.next
    let next = cur.next;

    // 反转的一步
    // 让pre 作为cur.next  就反转过来了
    cur.next = pre;

    // 节点往后遍历走
    // 重新，让cur作为pre
    pre = cur;
    // 让next 为cur 继续往后操作
    cur = next;
  }
  // 最后 返回pre
  return pre;
};
