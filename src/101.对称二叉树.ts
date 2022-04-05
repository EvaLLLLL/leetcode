/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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

const check = (p: TreeNode | null, q: TreeNode | null) => {
  if (!p && !q) return true
  if (!p || !q) return false
  if (p.val !== q.val) return false
  return check(p.right, q.left) && check(p.left, q.right)
}

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true
  return check(root.left, root.right)
}
// @lc code=end
