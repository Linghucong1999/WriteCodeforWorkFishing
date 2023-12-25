/**
 *148. 排序链表
 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 */
//  Definition for singly - linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    if (head === null) {
        return head;
    }

    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    arr.sort((a, b) => a - b);
    let newHead = new ListNode(arr[0]);
    let cur = newHead;
    for (let i = 1; i < arr.length; i++) {
        cur.next = new ListNode(arr[i]);
        cur = cur.next;
    }
    return newHead;
};