/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  if (!nums.length) return []

  let result: number[][] = []
  let len = nums.length
  let subset: number[] = []

  const dfs = (index: number) => {
    result.push(subset.slice())

    for (let i = index; i < len; i++) {
      subset.push(nums[i])
      dfs(i + 1)
      subset.pop()
    }
  }

  dfs(0)
  return result
}
// @lc code=end
