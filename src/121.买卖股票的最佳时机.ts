/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(arr: number[]): number {
  let min = arr[0],
    difMax = 0
  for (let i = 1; i < arr.length; i++) {
    const newDif = arr[i] - min
    difMax = Math.max(difMax, newDif)
    min = Math.min(min, arr[i])
  }
  return difMax
}
// @lc code=end
console.log(maxProfit([2, 1, 4]))
