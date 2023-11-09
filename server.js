const koa = require('koa');

const router = require('koa-router')();
const {koaBody} = require('koa-body');
const app = new koa();

//定制一个简单的RPC服务

function add(a, b) {
    return a + b;
}


router.post('/rpc',koaBody(), (ctx, next) => {
    try {
        const { method, params } = ctx.request.body;
        if (method === 'add') {
            const [a, b] = params;
            const result = add(a, b);
            ctx.body = result;
            ctx.status = 200;
            // ctx.type = "application/json";
        } else {
            ctx.status = 404
        }
    } catch (err) {
        ctx.status = 500;
        ctx.body = err;
    }
})

// app.use(koabody());

app.use(router.routes());


app.listen(8011, () => {
    console.log('server is running at port 8011');
})