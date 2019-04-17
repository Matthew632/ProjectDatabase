//const test = require('./test-data');
const development = require('./development-data');

const data = { development, production: development };

const env = process.env.NODE_ENV || 'development';

module.exports = data[env];
