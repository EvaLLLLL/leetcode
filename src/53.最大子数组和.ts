/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  if (!nums.length) return 0

  const dp: number[] = []

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || dp[i - 1] < 0) {
      dp[i] = nums[i]
    } else {
      dp[i] = dp[i - 1] + nums[i]
    }
  }

  return Math.max(...dp)
}
// @lc code=end
