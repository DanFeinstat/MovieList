const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = 3000;
const bodyParser = require('body-parser');

app.use(cors());
app.use('/', express.static(path.join(__dirname + '/../client/public')));

app.listen(port, () => { console.log(`MovieList is listening on port ${port}`) });
