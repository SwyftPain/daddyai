const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// Serve files from the 'files' directory
app.use('/files', express.static(path.join(__dirname, 'files')));

app.get('/data', (req, res) => {
  return res.json({
    Version: 0,
    DownloadUrl: `http://localhost:${port}/files/debug.zip`
  });
});

app.get('/updater', (req, res) => {
    return res.json({UpdaterFile: `http://localhost:${port}/files/updater.exe`});
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
