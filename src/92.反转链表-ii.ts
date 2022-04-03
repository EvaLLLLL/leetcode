/*
 * @lc app=leetcode.cn id=92 lang=typescript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number,
): ListNode | null {
  let pre: ListNode, curr: ListNode, leftHead: ListNode
  const dummy = new ListNode()
  dummy.next = head

  let p = dummy

  for (let i = 0; i < left - 1; i++) {
    p = p.next
  }

  leftHead = p

  let start = leftHead.next
  pre = start
  curr = pre.next

  for (let i = left; i < right; i++) {
    let next = curr.next
    curr.next = pre

    pre = curr
    curr = next
  }

  leftHead.next = pre
  start.next = curr

  return dummy.next
}
// @lc code=end
