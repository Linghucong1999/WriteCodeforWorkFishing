const qs = require('qs');

let obj = {
    a: 1,
    b: 2,
    c: 3
}
let str = qs.stringify(obj);

console.log(str);