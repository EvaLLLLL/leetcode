/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start

// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let head = new ListNode(0)
  let curr = head,
    p1 = l1,
    p2 = l2,
    carry = 0

  while (p1 || p2) {
    let sum = (p1?.val || 0) + (p2?.val || 0) + carry
    carry = sum >= 10 ? 1 : 0
    sum = sum - 10 * carry

    curr.next = new ListNode(sum)
    curr = curr.next

    if (p1) {
      p1 = p1.next
    }

    if (p2) {
      p2 = p2.next
    }
  }

  if (carry) {
    curr.next = new ListNode(carry)
  }

  return head.next
}
// @lc code=end
