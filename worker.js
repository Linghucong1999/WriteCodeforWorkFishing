self.onmessage = function (e) {
    // timedCount(e.data)
    creatPeopel(e.data)
}

const timedCount = function (data) {
    if (data === 'start') {
        let mapList = new Array(10000000).fill(1).map(() => {
            return Math.random() * 10000000;
        })
        let sumList = new Array(10000000).fill(1).map(() => { return Math.random() * 10000000 });
        let sum = 0;
        let max = 0
        for (let i = 0; i < mapList.length; i++) {
            sum += mapList[i];
        }
        for (let i = 0; i < sumList.length; i++) {
            if (max < sumList[i]) {
                max = sumList[i];
            }
        }
        postMessage({ sum, max })
    }
}

//随机创建千个人物对象信息
const creatPeopel = function (data) {
    if (data === 'start') {
        let objList = [];
        for (let i = 0; i < 10000; i++) {
            let obj = {
                name: getRandomName(),
                sex: '男',
                height: (Math.random() * 200).toFixed(2) + 'cm',
                weight: (Math.random() * 200).toFixed(2) + 'kg',
                birthday: new Date(),
                hobby: '打篮球',
                skill: '打篮球',
                address: getRandAddr(),
            }
            objList.push(obj);
        }

        postMessage(objList);
    }
}

function getRandomName() {
    let names = ["Alice", "Bob", "Charlie", "David", "Emma"];
    for (let i = 0; i < 1000; i++) {
        names.push(names[Math.floor(Math.random() * names.length)] + i);
    }
    return names[Math.floor(Math.random() * names.length)];
}

function getRandAddr() {
    let addr = ["Beijing", "Shanghai", "Guangzhou", "Shenzhen", "Hangzhou"];
    for (let i = 0; i < 1000; i++) {
        addr.push(addr[Math.floor(Math.random() * addr.length)] + i);
    }
    return addr[Math.floor(Math.random() * addr.length)];
}
