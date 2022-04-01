/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
  let p1 = 0
  let p2 = nums.length - 1

  while (p1 <= p2) {
    const mid = Math.floor(p1 + (p2 - p1) / 2)
    const num = nums[mid]

    if (num === target) {
      return mid
    } else if (num > target) {
      p2 = mid - 1
    } else if (num < target) {
      p1 = mid + 1
    }
  }

  return -1
}
// @lc code=end
