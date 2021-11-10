/*
 * @file: description
 * @author: longjing03
 * @Date: 2021-11-10 10:03:53
 * @LastEditors: longjing03
 * @LastEditTime: 2021-11-10 10:03:54
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

 // 两个链表的节点值和 sum
 // sum可能大于0 tag = 1 否则为 tag = 0；

 var addTwoNumbers = function(l1, l2) {
    let head = null,cur = null;
    let tag = 0;
    while(l1 || l2) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        const sum = n1 + n2 + tag;

        if (!head) {
            head = cur = new ListNode(sum % 10);
        } else {
            cur.next = new  ListNode(sum % 10);
            cur = cur.next
        }

        tag = Math.floor(sum / 10);

        if (l1) {
            l1 = l1.next;
        }

        if (l2) {
            l2 = l2.next;
        }
    }

    if (tag > 0) {
        cur.next = new ListNode(tag);
    }
    return head
};

