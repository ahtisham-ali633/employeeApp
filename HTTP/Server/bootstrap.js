const dotenv = require("dotenv");
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan')
// require('../../app/Infrastructure/Database/Models');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: '50mb'}));
const allowedOrigins = ['https://localhost:3000'];
app.use(cors({
    origin: allowedOrigins
}));

app.use(express.urlencoded({extended: false}));

module.exports = app;
