/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  if (s.length <= 1) return false

  const stack: string[] = []

  const bracketMap = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ])

  for (let i = 0; i < s.length; i++) {
    const currentStr = s[i]
    // 左括号
    if (bracketMap.has(currentStr)) {
      stack.push(bracketMap.get(currentStr) as string)
      continue
    }

    // 右括号
    if (stack[stack.length - 1] !== currentStr) {
      return false
    }

    stack.pop()
  }

  return !stack.length
}
// @lc code=end
