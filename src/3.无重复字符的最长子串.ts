/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  if (s.length <= 1) return s.length

  let max = 0
  let p1 = 0
  let p2 = 1

  while (p2 < s.length) {
    let map: { [key: string]: number } = {}
    for (let i = p1; i <= p2; i++) {
      const currentStr = s[i]
      if (map[currentStr] !== undefined) {
        p1++
        map = {}
        break
      } else {
        map[currentStr] = 1
        max = p2 - p1 + 1 > max ? p2 - p1 + 1 : max
        p2++
      }
    }
  }

  return max
}
// @lc code=end

const result = lengthOfLongestSubstring('abcabcbb')
console.log(result)
