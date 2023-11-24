const payload = {
    "上海": [
        {
            "cycye": "2023-11",
            "avgPrice": null
        },
        {
            "cycye": "2023-10",
            "avgPrice": null
        },
    ],
    "天津": [
        {
            "cycye": "2023-11",
            "avgPrice": null
        },
        {
            "cycye": "2023-10",
            "avgPrice": null
        },
        {
            "cycye": "2023-09",
            "avgPrice": null
        },

    ],
    "海峡": [
        {
            "cycye": "2023-11",
            "avgPrice": null
        },
        {
            "cycye": "2023-10",
            "avgPrice": null
        },
        {
            "cycye": "2023-09",
            "avgPrice": null
        },
    ],
}

const coloums = [
    {
        prop: 'SHEA',
        label: '上海'
    },
    {
        prop: 'TJEA21',
        label: '天津'
    },
    {
        prop: 'FJEA',
        label: '海峡'
    }
]

const result = [];
for (const item of coloums) {
    const cityName = item.label;
    const cityData = payload[cityName];
    const prop = item.prop;
    for (const cityItem of cityData) {
        const tableData = {}
        const date = cityItem.cycye;
        const avgPrice = cityItem.avgPrice === 0 || cityItem.avgPrice === null ? '-' : cityItem.avgPrice;
        tableData[prop] = avgPrice;
        tableData['date'] = date;
        tableData['city'] = cityName;
        tableData['prop'] = prop;
        result.push(tableData)
    }
}

const listData = [];
const dates = new Set();

for (const item of result) {
    dates.add(item.date);
}


for (const date of dates) {
    const newData = {};

    for (const item of result) {
        if (item.date === date) {
            const value = item[item.prop]
            const date = item.date;
            newData[item.prop] = value;
            newData['date'] = date;
        }
    }
    listData.push(newData)
}
console.log(listData)


