// const comlink = require('comlink');
import * as comlink from "https://unpkg.com/comlink/dist/umd/comlink.js";

async function main() {
    const myClass = comlink.wrap(new Worker('./worker.js'));

    const instance = await new myClass();

    await instance.onmessage('start');
}

main();
