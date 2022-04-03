/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 颠倒字符串中的单词
 */

// @lc code=start
function reverseWords(s: string): string {
  // 获取没有空格字符串的数组
  const arr = s.split(' ').filter(str => !!str)

  const newArr = []
  const len = arr.length

  arr.forEach((string, index) => {
    newArr[len - 1 - index] = string
  })

  return newArr.join(' ')
}
// @lc code=end
