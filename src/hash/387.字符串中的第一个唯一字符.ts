/*
 * @lc app=leetcode.cn id=387 lang=typescript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
function firstUniqChar(s: string): number {
  if (s.length === 1) {
    return 0;
  }

  if (s.length === 2) {
    const arr = s.split("");
    return arr[0] === arr[1] ? -1 : 0;
  }

  // 创建 map
  const map = new Map<string, number | undefined>();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  // 寻找最小值
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
}
// @lc code=end
