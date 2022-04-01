/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  const newListNode = new ListNode(0)
  let curr = newListNode
  let p1 = list1,
    p2 = list2

  while (p1 && p2) {
    if (p1.val > p2.val) {
      curr.next = p2
      p2 = p2.next
    } else {
      curr.next = p1
      p1 = p1.next
    }

    curr = curr.next
  }

  curr.next = p1 ?? p2

  return newListNode.next
}
// @lc code=end
