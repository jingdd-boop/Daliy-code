/*
 * @file: description
 * @author: longjing03
 * @Date: 2021-11-19 10:01:14
 * @LastEditors: longjing03
 * @LastEditTime: 2021-11-19 10:01:14
 */
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
var mergeTwoLists = function (l1, l2) {
  let preHead = new ListNode(-1);
  let pre = preHead;

  while (l1 != null && l2 != null) {
    // pre 一直指向小的
    if (l1.val <= l2.val) {
      pre.next = l1;
      l1 = l1.next;
    } else {
      pre.next = l2;
      l2 = l2.next;
    }
    pre = pre.next;
  }
  // 将链表末尾指向未合并完的链表
  pre.next = l1 === null ? l2 : l1;
  return preHead.next;
};

var mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2;
  } else if (l2 === null) {
    return l1;
  } else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    console.log(l1);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
