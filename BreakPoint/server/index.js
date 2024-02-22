const express = require('express');
const cors = require('cors');
const fs = require('fs');
const router = require('./router.js');
const test = require('./test.js')


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(express.static('./'))
router(app);
test(app);
app.listen(8011, () => {
    console.log('server is running on http://127.0.0.1:8011');
})
