//找出arr的里面的节点，例如，传入的id是3，那么算法返回的是 [1，2，3],传入id是5，那么返回的是 [4,5]
const arr = [
    { id: 1, name: '张三', children: [{ id: 2, name: '李四', children: [{ id: 3, name: '王五' }] }] },
    { id: 4, name: '赵七', children: [{ id: 5, name: '管八' }] },
    { id: 6, name: '老九' },
]

const nodeid = 3

function findNode(arr, id) {
    const queue = [{ node: arr, path: [] }]; // 使用队列进行广度优先搜索
    while (queue.length > 0) {
        const { node, path } = queue.shift();

        for (let i = 0; i < node.length; i++) {
            const item = node[i];
            const newPath = [...path, item.name];
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

