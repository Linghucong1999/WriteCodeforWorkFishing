/**
 * 2798. 满足目标工作时长的员工数目
 * 公司里共有 n 名员工，按从 0 到 n - 1 编号。每个员工 i 已经在公司工作了 hours[i] 小时。

公司要求每位员工工作 至少 target 小时。

给你一个下标从 0 开始、长度为 n 的非负整数数组 hours 和一个非负整数 target 。

请你用整数表示并返回工作至少 target 小时的员工数。

输入：hours = [0,1,2,3,4], target = 2
输出：3
解释：公司要求每位员工工作至少 2 小时。
- 员工 0 工作 0 小时，不满足要求。
- 员工 1 工作 1 小时，不满足要求。
- 员工 2 工作 2 小时，满足要求。
- 员工 3 工作 3 小时，满足要求。
- 员工 4 工作 4 小时，满足要求。
共有 3 位满足要求的员工。
 */

function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
    // let count = 0;

    // for (let i = 0; i < hours.length; i++) {
    //     if (hours[i] >= target) {
    //         count++;
    //     }
    // }
    // return count;

    return hours.filter(item => item >= target).length;


};