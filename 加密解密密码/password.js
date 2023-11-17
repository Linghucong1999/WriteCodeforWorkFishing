let crypto = { secret: '#*#*linghucong1998*#*#' };

const bcryptjs = require('bcryptjs');

//加密
async function hashPassword(password) {
    const salt = await bcryptjs.genSalt(8);
    return await bcryptjs.hash(password, salt);
}

//解密
async function comparePassword(password, hash) {
    return await bcryptjs.compare(password, hash);
}

let password = '123456';
hashPassword(password).then(hash => {
    console.log(hash);
    password='234945'
    comparePassword(password, hash).then(bool => {
        console.log(bool);
    })
})