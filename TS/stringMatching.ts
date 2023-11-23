/**
 * 1408. 数组中的字符串匹配
 * 给你一个字符串数组 words ，数组中的每个字符串都可以看作是一个单词。请你按 任意 顺序返回 words 中是其他单词的子字符串的所有单词。

如果你可以删除 words[j] 最左侧和/或最右侧的若干字符得到 words[i] ，那么字符串 words[i] 就是 words[j] 的一个子字符串。

输入：words = ["mass","as","hero","superhero"]
输出：["as","hero"]
解释："as" 是 "mass" 的子字符串，"hero" 是 "superhero" 的子字符串。
["hero","as"] 也是有效的答案
 */

// function stringMatching(words: string[]): string[] {
//     let result: string[] = [];
//     let set = new Set<string>();
//     for (let i = 0; i < words.length; i++) {
//         for (let j = 0; j < words.length; j++) {
//             if (i !== j && words[j].includes(words[i])) {
//                 set.add(words[i]);
//             }
//         }
//     }
//     result = Array.from(set);
//     return result;
// }

function stringMatching(words: string[]): string[] {
    const strList:string[] = [];


    for (let i = 0; i < words.length; i++) {
       for(let j = 0; j < words.length; j++) {
           if (i !== j && words[j].includes(words[i])) {
               strList.push(words[i])
               break;
           }
       }
    }

    return strList
};

let words = ["mass","as","hero","superhero"]
console.log(stringMatching(words));

export default {

}