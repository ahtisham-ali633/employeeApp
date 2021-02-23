require('dotenv').config();
const database = require('./database');
const server = require('./');

module.exports = {
  database,
  server
};
