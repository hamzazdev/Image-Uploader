const express = require('express');
const path = require('path');
const multer = require('multer');
const sha1 = require('js-sha1');

const app = express();
app.use(express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'build')));

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './images/'),
  filename: (req, file, cb) => {
    const { size, originalname, mimetype } = file;
    const extension = originalname.match(/\.[a-zA-Z0-9]*$/);
    cb(null, `${sha1(size + originalname + mimetype)}${extension[0]}`);
  },
});
const upload = multer({ storage });

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/imageUpload', upload.single('newPhoto'), (req, res) => {
  res.json({
    url: `${req.protocol}://${req.get('host')}/${req.file.filename}`,
  });
});

app.listen(3001);
