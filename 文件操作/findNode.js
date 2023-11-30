//找出arr的里面的节点，例如，传入的id是3，那么算法返回的是 [1，2，3],传入id是5，那么返回的是 [4,5]
const arr = [
    { id: 1, children: [{ id: 2, children: [{ id: 3 }] }] },
    { id: 4, children: [{ id: 5 }] },
    { id: 6 },
]

const nodeid = 3

function findNode(arr, id) {
    const queue = [{ node: arr, path: [] }]; // 使用队列进行广度优先搜索
    while (queue.length > 0) {
        const { node, path } = queue.shift();

        for (let i = 0; i < node.length; i++) {
            const item = node[i];
            const newPath = [...path, item.id];
            if (item.id === id) {
                return newPath;
            }
            if (item.children) {
                queue.push({ node: item.children, path: newPath });
            }
        }
    }
    return null;
}

const result = findNode(arr, nodeid);

console.log(result); // [1, 2, 3]

