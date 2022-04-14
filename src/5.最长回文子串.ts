/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  const len = s.length
  let [left, right] = [0, 1]
  let pre: number[] = []
  let cur: number[] = [0, 1]
  
  for (let i = 0; i < len; i++) {
    for (let j of pre) {
      if (s[i] === s[j - 1]) {
        cur.push(j - 1)
        if (i - j + 2 > right - left) [left, right] = [j - 1, i + 1]
      }
    }

    ;[cur, pre] = [[i + 1, i + 2], cur]
  }

  return s.slice(left, right)
}

// @lc code=end

console.log(longestPalindrome('adam'))
console.log(longestPalindrome('babad'))
console.log(longestPalindrome('a'))
console.log(longestPalindrome('aaaaa'))
console.log(longestPalindrome('cbbd'))
console.log(longestPalindrome('aaabaaaa'))
console.log(longestPalindrome('tattarrattat'))
