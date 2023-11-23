/**
 * 1410. HTML 实体解析器
 * 「HTML 实体解析器」 是一种特殊的解析器，它将 HTML 代码作为输入，并用字符本身替换掉所有这些特殊的字符实体。

HTML 里这些特殊字符和它们对应的字符实体包括：

双引号：字符实体为 &quot; ，对应的字符是 " 。
单引号：字符实体为 &apos; ，对应的字符是 ' 。
与符号：字符实体为 &amp; ，对应对的字符是 & 。
大于号：字符实体为 &gt; ，对应的字符是 > 。
小于号：字符实体为 &lt; ，对应的字符是 < 。
斜线号：字符实体为 &frasl; ，对应的字符是 / 。
给你输入字符串 text ，请你实现一个 HTML 实体解析器，返回解析器解析后的结果。

示例 1：

输入：text = "&amp; is an HTML entity but &ambassador; is not."
输出："& is an HTML entity but &ambassador; is not."
解释：解析器把字符实体 &amp; 用 & 替换
 */

function entityParser(text: string): string {

    let obj = {
        '&quot;': '\"',
        '&apos;': "'",
        '&gt;': '>',
        '&lt;': '<',
        '&frasl;': '/',
        '&amp;': '&',
    }
    // let strArray: Array<string> = [];
    for (let [key, value] of Object.entries(obj)) {
        let regx = new RegExp(key, "g");
        text = text.replace(regx, value);
    }
    return text;
};

let text = "&amp;gt;";
console.log(entityParser(text));