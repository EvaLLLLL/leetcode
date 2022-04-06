/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  const len = nums.length
  const res: number[][] = []
  const visited: { [key: string]: number } = {}

  const dfs = (path: number[]) => {
    if (path.length === len) {
      res.push(path.slice())
      return
    }

    for (let num of nums) {
      if (!visited[num]) {
        visited[num] = 1
        path.push(num)
        dfs(path)
        path.pop()
        visited[num] = 0
      }
    }
  }

  dfs([])
  return res
}
// @lc code=end

permute([1, 2, 3])
