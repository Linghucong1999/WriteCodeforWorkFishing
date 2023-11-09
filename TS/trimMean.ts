/**
 * 1619. 删除某些元素后的数组均值
 * 给你一个整数数组 arr ，请你删除最小 5% 的数字和最大 5% 的数字后，剩余数字的平均值。

与 标准答案 误差在 10-5 的结果都被视为正确结果。
输入：arr = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]
输出：2.00000
解释：删除数组中最大和最小的元素后，所有元素都等于 2，所以平均值为 2 
 */
function trimMean(arr: number[]): number {
    let len = arr.length
    let arr1 = arr.sort((a, b) => a - b)
    let arr2 = arr1.slice(Math.floor(len * 0.05), Math.floor(len * 0.95));
    return arr2.reduce((a, b) => a + b, 0) / arr2.length
};