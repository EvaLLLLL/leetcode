/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
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

function preorderTraversal(root: TreeNode | null): number[] {
  let result: number[] = []

  if (!root) return result

  const stack: TreeNode[] = []

  stack.push(root)

  while (stack.length) {
    const curr = stack.pop()
    result.push(curr.val)

    if (curr.right) {
      stack.push(curr.right)
    }

    if (curr.left) {
      stack.push(curr.left)
    }
  }

  return result
}
// @lc code=end
