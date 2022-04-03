/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (strs.length <= 1) return strs[0]

  let p = 0,
    res = ''

  const isNotEqual = (index: number) => {
    const commonLetter = strs[0][index]
    for (let i = 0; i < strs.length; i++) {
      const currentLetter = strs[i][index]
      if (currentLetter !== commonLetter) {
        return true
      }
    }

    return false
  }

  while (p < strs[0].length) {
    if (isNotEqual(p)) {
      return res
    } else {
      res = strs[0].substring(0, p + 1)
      p++
    }
  }

  return res
}
// @lc code=end
// const res = longestCommonPrefix(['flower', 'flow', 'flight'])
const res = longestCommonPrefix(['ab', 'a'])
console.log(res)
