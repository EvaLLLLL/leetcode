/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
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

function inorderTraversal(root: TreeNode | null): number[] {
  let result: number[] = []

  if (!root) return result

  const stack: TreeNode[] = []

  let curr = root

  while (curr || stack.length) {
    // 找到最左边的叶子节点
    while (curr) {
      stack.push(curr)
      curr = curr.left
    }

    curr = stack.pop()
    result.push(curr.val)

    curr = curr.right
  }

  return result
}
// @lc code=end
