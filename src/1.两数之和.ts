/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map: { [key: string]: number } = {}

  for (let i = 0; i < nums.length; i++) {
    const m = target - nums[i]

    if (map[m] !== undefined) {
      return [map[m], i]
    } else {
      map[nums[i]] = i
    }
  }

  return []
}
// @lc code=end
