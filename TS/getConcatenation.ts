/**
 * 1929. 数组串联
 * 给你一个长度为 n 的整数数组 nums 。请你构建一个长度为 2n 的答案数组 ans ，数组下标 从 0 开始计数 ，对于所有 0 <= i < n 的 i ，满足下述所有要求：
 * 输入：nums = [1,2,1]
输出：[1,2,1,1,2,1]
解释：数组 ans 按下述方式形成：
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]
 */

function getConcatenation(nums: number[]): number[] {
    let numsarr = nums.concat(nums);
    return numsarr;
};