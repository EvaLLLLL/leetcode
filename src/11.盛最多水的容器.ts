/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
  let p1 = 0,
    p2 = height.length - 1,
    max = 0

  const getArea = (idx1: number, idx2: number) =>
    (idx2 - idx1) * (height[idx1] > height[idx2] ? height[idx2] : height[idx1])

  while (p2 > p1) {
    max = max > getArea(p1, p2) ? max : getArea(p1, p2)

    if (height[p1] > height[p2]) {
      p2--
    } else {
      p1++
    }
  }

  return max
}
// @lc code=end

const result = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
console.log(result)
