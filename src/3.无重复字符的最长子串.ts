/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  if (s.length <= 1) return s.length

  let max = 0,
    p1 = 0,
    p2 = 1

  const hasEqual = (idx1: number, idx2: number) => {
    for (let i = idx1; i < idx2; i++) {
      if (s[i] === s[idx2]) {
        return true
      }
    }

    return false
  }

  while (p2 < s.length && p1 < s.length) {
    if (!hasEqual(p1, p2)) {
      max = p2 - p1 + 1 > max ? p2 - p1 + 1 : max
      p2++
    } else {
      p1++
    }
  }

  return max
}
// @lc code=end

const result = lengthOfLongestSubstring('abcabcbb')
console.log(result)
