const path = require('path')
const multipary = require('multiparty')
const uploadDir = path.resolve(__dirname, '../upload');
const { Buffer } = require('node:buffer')
const SparkMD5 = require('spark-md5');
const fs = require('fs');

class UploadMultipary {
    constructor() {
        this.handleMultipary = this.handleMultipary.bind(this);
        this.uploadSlice = this.uploadSlice.bind(this);
    }

    handleMultipary(req, res, temp) {
        return new Promise((resolve, reject) => {
            //multiparty配置
            let options = {
                maxFieldsSize: 200 * 1024 * 1024
            };
            !temp ? options.uploadDir = uploadDir : null
            let form = new multipary.Form(options);
            form.parse(req, function (err, fields, files) {
                if (err) {
                    res.send({
                        code: 1,
                        resone: err
                    });
                    reject(err);
                    return;
                }

                resolve({
                    fields,
                    files
                })
            })
        })
    }


    //上传base64
    uploadBase64(req, res, temp) {
        let { chunk, filename } = req.body;
        chunk = decodeURIComponent(chunk);
        chunk = chunk.replace(/^data:image\/\w+;base64,/, "");
        chunk = Buffer.from(chunk, 'base64');

        //存储文件到服务器
        let spark = new SparkMD5.ArrayBuffer();
        let suffix = /\.([0-9a-zA-Z]+)$/.exec(filename)[1];

        spark.append(chunk);
        let path = `${uploadDir}/${spark.end()}.${suffix}`
        fs.writeFileSync(path, chunk);

        res.send({
            code: 0,
            originalFilename: filename,
            path: path.replace(__dirname, 'http://127.0.0.1:8011')
        })
    }


    //切片上传  合并
    async uploadSlice(req, res) {
        let { fields, files } = await this.handleMultipary(req, res)

        let [chunk] = files.chunk;
        let [filename] = fields.filename;

        let hash = /([0-9a-zA-Z+])_\d+/.exec(filename)[1];
        let path = `${uploadDir}/${hash}`;

        !fs.existsSync(path) ? fs.mkdirSync(path) : null;
        path = `${path}/${filename}`;
        fs.access(path, async err => {
            if (!err) {
                res.send({
                    code: 0,
                    path: path.replace(__dirname, 'http://127.0.0.1:8011')
                })
                return;
            }

            //不存在就创建
            let readStream=fs.createReadStream(chunk.path);
            let writeStream=fs.createWriteStream(path);
        })

    }


}

module.exports = new UploadMultipary();