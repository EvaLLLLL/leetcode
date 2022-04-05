/*
 * @lc app=leetcode.cn id=404 lang=typescript
 *
 * [404] 左叶子之和
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

function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root) return 0

  let result: number = 0
  let stack: TreeNode[] = []

  stack.push(root)
  const visited = new Map<TreeNode, number>()

  while (stack.length) {
    const curr = stack.pop()

    let currLeftLeaf = curr

    if (!!currLeftLeaf.left) {
      while (currLeftLeaf.left) {
        currLeftLeaf = currLeftLeaf.left
      }

      if (
        !visited.has(currLeftLeaf) &&
        !currLeftLeaf.left &&
        !currLeftLeaf.right
      ) {
        result += currLeftLeaf.val
        visited.set(currLeftLeaf, 1)
      }
    }

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
