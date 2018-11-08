require('./config/config.js');
const _ = require('lodash');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user');
const recipeRouter = require('./routes/recipe');
const logger = require('./middleware/logger');
const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());
app.use(logger);

app.use('/', [userRouter, recipeRouter]);

app.listen(port, () => {
  console.log(`Server is runnning on port: ${port}`);
});

module.exports = { app };