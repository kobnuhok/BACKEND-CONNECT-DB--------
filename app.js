const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const connectToDatabase = require('./database/connect');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const apiRouter = require('./routes/api');
const pagesRouter = require('./routes/pages');

const app = express();
const PORT = 3001;

connectToDatabase();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(pagesRouter);
app.use(apiRouter);
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту http://localhost:${PORT}`);
});
