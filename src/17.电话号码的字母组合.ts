/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

const dic = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
}

// @lc code=start
function letterCombinations(digits: string): string[] {
  const len = digits.length
  const res: string[] = []
  const visited: { [key: string]: string } = {}

  const dfs = (path: string) => {
    if (path.length === len) {
      res.push(path)
      return
    }

    for (let i = 0; i < len; i++) {
      const currentStrs = dic[digits[i]]

      for (let j = 0; j < 3; j++) {
        const currentCharactor = currentStrs[j]
        if (!visited[currentCharactor]) {
          path += currentStrs[j]
          visited[currentStrs[j]] = 1
        }
      }
    }
  }

  return res
}
// @lc code=end
