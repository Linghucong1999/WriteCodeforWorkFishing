const multiUpload = require('./controller/multiUpload');


module.exports = app => {
    const express = require('express')
    const router = express.Router()
    router.get('/', (req, res) => {
        res.send('get')
    })
    router.post('/fs', async (req, res) => {
        let { files } = await multiUpload.handleMultipary(req, res);
        let filesInfo = files.file[0]
        res.send({
            code: 0,
            originalFilename: filesInfo.originalFilename,
            path: filesInfo.path.replace(__dirname, 'http://127.0.0.1:8011')
        })
    })

    app.use(router);
}