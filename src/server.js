const express = require('express');
const multer = require('multer');
const sha1 = require('js-sha1');

const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => {
        const { size, originalname, mimetype } = file
        const extension = originalname.match(/\.[a-zA-Z0-9]*$/) 
        cb(null, `${sha1(size + originalname + mimetype) }${extension[0]}`)
    }
})
const upload = multer({ storage })

app.post('/imageUpload', upload.single('newPhoto'), (req, res) => {
    res.redirect(301, '/')
    // res.send(JSON.stringify('http://localhost:3000/' + req.file.path))
})

app.listen(3001)