// 如果有100个请求，你如何使用Promise控制并发，同时如何避免并发竞态，当池子（消费者）满时会自动阻塞写入，当池子有空闲的就会自动从管道读取

function limitConcurrency(request, concurrencyLimit) {
    const requestQueue = request.slice(); // 复制请求数组
    let running = 0;

    function runNextRequext() {
        if (requestQueue.length > 0 && running < concurrencyLimit) {
            const req = requestQueue.shift();
            running++;
            req().then(() => {
                running--;
                runNextRequext();
            })
        }
    }

    for (let i = 0; i < concurrencyLimit; i++) {
        runNextRequext();
    }
}

// 模拟100个请求
const requests = new Array(100).fill(null).map((_, index) => {
    return () => new Promise(resolve => {
        setTimeout(() => {
            console.log(`请求成功${index + 1}`);
            resolve();
        }, Math.random() * 1000)
    })
})

limitConcurrency(requests, 50); // 限制并发数为3