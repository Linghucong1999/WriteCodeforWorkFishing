const publicData = {
  type: 'line',
  emphasis: {
    focus: 'series',
  }
}
const list = { name: '全国', data: [150, 230, 224, 218, 135, 147, 260], ...publicData }
console.log(list);