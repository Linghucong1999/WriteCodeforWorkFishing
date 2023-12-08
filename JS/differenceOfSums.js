/**
 * 2894. 分类求和并作差
给你两个正整数 n 和 m 。

现定义两个整数 num1 和 num2 ，如下所示：

num1：范围 [1, n] 内所有 无法被 m 整除 的整数之和。
num2：范围 [1, n] 内所有 能够被 m 整除 的整数之和。
返回整数 num1 - num2 。

输入：n = 10, m = 3
输出：19
解释：在这个示例中：
- 范围 [1, 10] 内无法被 3 整除的整数为 [1,2,4,5,7,8,10] ，num1 = 这些整数之和 = 37 。
- 范围 [1, 10] 内能够被 3 整除的整数为 [3,6,9] ，num2 = 这些整数之和 = 18 。
返回 37 - 18 = 19 作为答案。
 */

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
    let num1 = 0, num2 = 0;
    for (let i = 1; i <= n; i++) {
        if (i % m !== 0) {
            num1 += i;
        } else {
            num2 += i;
        }
    }
    return num1 - num2;
};

let n=10, m=3;
console.log(differenceOfSums(n, m));