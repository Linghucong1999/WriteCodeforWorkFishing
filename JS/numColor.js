/**
 * LCP 44. 开幕式焰火
 * 「力扣挑战赛」开幕式开始了，空中绽放了一颗二叉树形的巨型焰火。 给定一棵二叉树 root 代表焰火，节点值表示巨型焰火这一位置的颜色种类。请帮小扣计算巨型焰火有多少种不同的颜色。
 * 输入：root = [1,3,2,1,null,2]

输出：3

解释：焰火中有 3 个不同的颜色，值分别为 1、2、3
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var numColor = function (root) {
    let stack=[];
    stack.push(root);
    let res=[];
    while(stack.length>0){
        let node=stack.pop();
        if(node.left){
            stack.push(node.left);
            node.left=null;
        }
        if(node.right){
            stack.push(node.right);
            node.right=null;
        }
        res.push(node.val);
        
    }
    return [...new Set(res)].length;
};
