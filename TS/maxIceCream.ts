/**
 * 1833. 雪糕的最大数量
 * 夏日炎炎，小男孩 Tony 想买一些雪糕消消暑。

商店中新到 n 支雪糕，用长度为 n 的数组 costs 表示雪糕的定价，其中 costs[i] 表示第 i 支雪糕的现金价格。Tony 一共有 coins 现金可以用于消费，他想要买尽可能多的雪糕。

注意：Tony 可以按任意顺序购买雪糕。

给你价格数组 costs 和现金量 coins ，请你计算并返回 Tony 用 coins 现金能够买到的雪糕的 最大数量 。

你必须使用计数排序解决此问题。
输入：costs = [1,3,2,4,1], coins = 7
输出：4
解释：Tony 可以买下标为 0、1、2、4 的雪糕，总价为 1 + 3 + 2 + 1 = 7
 */

function maxIceCream(costs: number[], coins: number): number {
    //这一段可要可不要
    let sum = costs.reduce((a, b) => a + b);
    if (sum < coins) return costs.length;
    //

    else {
        costs.sort((a, b) => a - b);
        let res = 0;
        for (let i = 0; i < costs.length; i++) {
            if (coins >= costs[i]) {
                coins -= costs[i];
                res++;
            }
        }
        return res;
    }
};