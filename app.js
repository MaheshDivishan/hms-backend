const express = require('express');
const app = express(); // create a express instance
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); // middlewares

module.exports = app;

// this is a express application