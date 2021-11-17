/*
 * @file: description
 * @author: longjing03
 * @Date: 2021-11-17 19:56:33
 * @LastEditors: longjing03
 * @LastEditTime: 2021-11-17 19:56:34
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let pre = new ListNode(0, head); // 创建一个虚拟头结点
  let slow = (fast = pre); // 设置双指针

  // 快指针先走n步

  while (n--) fast = fast.next;

  // 如果快指针没有，直接return
  if (!fast) return pre.next;

  // 当fast.next存在
  // 快慢指针一起走
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  // 删除慢指针指向的那个
  slow.next = slow.next.next;

  // 返回
  return pre.next;
};
