/*
 * @lc app=leetcode.cn id=103 lang=typescript
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return []

  const result: number[][] = []
  const queue: TreeNode[] = []

  queue.push(root)
  let flag = true

  while (queue.length) {
    let level: number[] = []
    const len = queue.length

    for (let i = 0; i < len; i++) {
      const first = queue.shift()

      if (flag) {
        level.push(first.val)
      } else {
        level.unshift(first.val)
      }

      if (first.left) {
        queue.push(first.left)
      }

      if (first.right) {
        queue.push(first.right)
      }
    }

    flag = !flag
    result.push(level)
  }

  return result
}

// @lc code=end
