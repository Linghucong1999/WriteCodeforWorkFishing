/**
 * 2784. 检查数组是否是好的
 * 给你一个整数数组 nums ，如果它是数组 base[n] 的一个排列，我们称它是个 好 数组。

base[n] = [1, 2, ..., n - 1, n, n] （换句话说，它是一个长度为 n + 1 且包含 1 到 n - 1 恰好各一次，包含 n  两次的一个数组）。比方说，base[1] = [1, 1] ，base[3] = [1, 2, 3, 3] 。

如果数组是一个好数组，请你返回 true ，否则返回 false 。

注意：数组的排列是这些数字按任意顺序排布后重新得到的数组。

输入：nums = [2, 1, 3]
输出：false
解释：因为数组的最大元素是 3 ，唯一可以构成这个数组的 base[n] 对应的 n = 3 。但是 base[3] 有 4 个元素，但数组 nums 只有 3 个元素，所以无法得到 base[3] = [1, 2, 3, 3] 的排列，所以答案为 false 。
 */

function isGood(nums: number[]): boolean {
    const max = Math.max(...nums);
    
    if (nums.length !== max + 1 || nums[max] === undefined) {
        return false;
    } else if (max + 1 < nums.length) {
        return false;
    }
    else {
        return true;
    }
};
let nums = [5, 7, 3, 1, 5, 2, 6, 4];
isGood(nums);