// const fetch = require('node-fetch');
import fetch from 'node-fetch';

async function rpcCall(method, params) {
    const response = await fetch('http://127.0.0.1:8011/rpc', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({method,params}),
        mode: 'cors',
        cache: 'no-cache',
    });

    try {
        const result = await response.json();
        return result;
    } catch (err) {
        return err;
    }
}

//发起rpc请求
async function main() {
    const result = await rpcCall('add', [2,3]);
    console.log(result);
}

main();