//提供list，和data树状结构的列表进行对比，
const data = [
    {
        id: 1,
        label: '一级 1',
        children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
                id: 9,
                label: '三级 1-1-1'
            }, {
                id: 10,
                label: '三级 1-1-2'
            }]
        }]
    }, {
        id: 2,
        label: '一级 2',
        children: [{
            id: 5,
            label: '二级 2-1'
        }, {
            id: 6,
            label: '二级 2-2'
        }]
    },
]

const list = {
    id: 9,
    label: '三级 1-1-1'
}

//metaId确定
//可以根据id来找到对应的数据，然后进行删除即可

function findNode(data, id) {
    const stack = [];

    stack.push(data);
    while (stack.length) {
        const node = stack.pop();
        node.forEach((item, index) => {
            if (item.id === id) {
                node.splice(index, 1);
                return true;
            }
            if (item.children) {
                stack.push(item.children);
            }
        })
    }
}

findNode(data, list.id);
console.log(data);