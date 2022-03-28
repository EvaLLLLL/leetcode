/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// 双指针对撞解法

// @lc code=start
function threeSum(nums: number[]): number[][] {
  const result = []
  const len = nums.length
  nums = nums.sort((a, b) => a - b)

  for (let i = 0; i < len - 2; i++) {
    //  这个数已经遍历过了，则跳过本次
    if (i > 0 && nums[i] === nums[i - 1]) continue

    // 左指针
    let j = i + 1
    // 右指针
    let k = len - 1

    // 两指针不重合的情况下遍历
    while (j < k) {
      //  当前数
      const current = nums[i]
      //    左指针数
      const left = nums[j]
      //   右指针数
      const right = nums[k]

      if (current + left + right === 0) {
        result.push([current, left, right])
        k--
        j++

        // 左移后如果和上一次的值一致，继续左移
        while (j < k && nums[k] === nums[k + 1]) {
          k--
        }

        // 右移后如果和上次的值一直，继续右移
        while (j < k && nums[j] === nums[j - 1]) {
          j++
        }
      } else if (current + left + right < 0) {
        //  小了，左指针右移
        j++

        // 右移后如果和上次的值一直，继续右移
        while (j < k && nums[j] === nums[j - 1]) {
          j++
        }
      } else if (current + left + right > 0) {
        //   大了，右指针左移
        k--

        // 左移后如果和上一次的值一致，继续左移
        while (j < k && nums[k] === nums[k + 1]) {
          k--
        }
      }
    }
  }

  return result
}
// @lc code=end

console.log(threeSum([1,-1,-1,0]))
