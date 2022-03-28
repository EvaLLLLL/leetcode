/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  if (s.length === 1) return s

  if (s.length === 2) {
    return s[0] === s[1] ? s : s[0]
  }

  const isPalindrome = (str: string) => {
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - i - 1]) {
        return false
      }
    }

    return true
  }

  const findMax = (strs: string[]) => {
    let max = 0
    const nums = strs.map(s => Number(s))
    for (let i = 0; i < nums.length; i++) {
      max = nums[i] >= max ? nums[i] : max
    }
    return max.toString()
  }

  const resultMap: { [key: string]: string[] } = {}

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      const currentStr = s.substring(i, j)

      if (isPalindrome(currentStr)) {
        if (resultMap[currentStr.length]) {
          resultMap[currentStr.length].push(currentStr)
        } else {
          resultMap[currentStr.length] = [currentStr]
        }
      }
    }
  }

  const maxStrNum = findMax(Object.keys(resultMap))
  return maxStrNum ? resultMap[maxStrNum][0] : s[0]
}
// @lc code=end
