/**
 * 1941. 检查是否所有字符出现次数相同
 * 给你一个字符串 s ，如果 s 是一个 好 字符串，请你返回 true ，否则请返回 false 。

如果 s 中出现过的 所有 字符的出现次数 相同 ，那么我们称字符串 s 是 好 字符串。
输入：s = "abacbc"
输出：true
解释：s 中出现过的字符为 'a'，'b' 和 'c' 。s 中所有字符均出现 2 次。
 */
function areOccurrencesEqual(s: string): boolean {
    let map = new Map<string, number>();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i])! + 1);
        } else {
            map.set(s[i], 1);
        }
    }

    let set = new Set<number>();
    for (let [key, value] of map) {
        if (!set.has(value)&&set.size!==0) {
            return false;
        } else {
            set.add(value);
        }
    }
    return true;
};

let s = "aaabb";
console.log(areOccurrencesEqual(s));