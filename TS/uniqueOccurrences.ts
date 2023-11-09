/**
 * 1207. 独一无二的出现次数
 * 给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。

如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。
输入：arr = [1,2,2,1,1,3]
输出：true
解释：在该数组中，1 出现了 3 次，2 出现了 2 次，3 只出现了 1 次。没有两个数的出现次数相同。
 */

function uniqueOccurrences(arr: number[]): boolean {
    let map = new Map<number, number>();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i])! + 1);
        } else {
            map.set(arr[i], 1);
        }
    }

    let set = new Set<number>();
    for (let [key, value] of map) {
        if (set.has(value)) {
            return false;
        }
        set.add(value);
    }
    return true;
};