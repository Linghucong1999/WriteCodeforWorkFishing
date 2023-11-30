//假设我有一个id数组tableid=[] 一个正在等待根据tableid里面的id位置，排到相同位置的数组table
const tableid = [1, 3, 5, 2, 4]

const table = [
  {
    id: 1,
    name: '张三'
  }, {
    id: 2,
    name: '李四'
  }, {
    id: 3,
    name: '王五'
  }, {
    id: 4,
    name: '赵六'
  }, {
    id: 5,
    name: '钱七'
  }
]

for (let i = 0; i < tableid.length; i++) {
  const id = tableid[i];
  const row = table.find(item => item.id === id);
  const currentIndex = table.indexOf(row);
  if (currentIndex !== i) {
    const temp = table[i];
    table[i] = row;
    table[currentIndex] = temp;
  }
}

console.log(table)