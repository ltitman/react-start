const { resolve } = require('path');

const isDev = process.env.NODE_ENV === 'development';
const SERVER_HOST = '127.0.0.1';
const SERVER_PORT = 8086;
const PROJECT_PATH = resolve(__dirname, '../');

module.exports = {
  isDev,
  SERVER_HOST,
  SERVER_PORT,
  PROJECT_PATH,
};
