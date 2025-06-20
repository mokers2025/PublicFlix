const express = require('express');
const multer  = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;
app.use(cors());

const UPLOAD_DIR = path.join(__dirname, 'uploads');
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

app.use('/uploads', express.static(UPLOAD_DIR));

app.post('/api/upload', upload.single('movie'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file' });
  res.json({ name: req.file.filename, url: `/uploads/${req.file.filename}` });
});

app.get('/api/videos', (req, res) => {
  const files = fs.readdirSync(UPLOAD_DIR);
  const videos = files.map(name => ({
    name,
    url: `/uploads/${name}`
  }));
  res.json(videos);
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
