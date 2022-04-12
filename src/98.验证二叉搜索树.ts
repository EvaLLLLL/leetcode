/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
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

function isValidBST(root: TreeNode | null): boolean {
  return isValid(root, null, null)
}

function isValid(
  node: TreeNode | null,
  min: TreeNode | null,
  max: TreeNode | null,
) {
  if (!node) return true

  if (!!min && node.val <= min.val) return false
  if (!!max && node.val >= max.val) return false

  return isValid(node.left, min, node) && isValid(node.right, node, max)
}
// @lc code=end
