/*
 * @lc app=leetcode.cn id=567 lang=typescript
 *
 * [567] 字符串的排列
 */

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
  // 获取 {s: 1} 映射
  const makeMap = (str: string) => {
    const tempMap = new Map<string, number>()

    for (let i = 0; i < str.length; i++) {
      tempMap.set(
        str[i],
        tempMap.has(str[i]) ? (tempMap.get(str[i]) as number) + 1 : 1,
      )
    }

    return tempMap
  }

  //  判断 str2 是否包含 str1
  const isIncludes = (str1: string, str2: string) => {
    const str1Map = makeMap(str1)
    const str2Map = makeMap(str2)

    for (let i = 0; i < str1.length; i++) {
      const currentStr = str1[i]
      if (
        !str2Map.has(currentStr) ||
        str1Map.get(currentStr) !== str2Map.get(currentStr)
      ) {
        return false
      }
    }

    return true
  }

  // 双指针向右滑动
  let p1 = 0,
    p2 = s1.length

  while (p1 < s2.length && p2 < s2.length + 1) {
    const curr = s2.substring(p1, p2)

    if (isIncludes(s1, curr)) {
      return true
    }

    p1++, p2++
  }

  return false
}
// @lc code=end
// console.log(checkInclusion('ab', 'eidbaooo'))
// console.log(checkInclusion('ab', 'eidboaoo'))
console.log(checkInclusion('adc', 'dcda'))
