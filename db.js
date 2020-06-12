const config = require('config');
const { Pool } = require('pg');

const connectionString = config.get('CONNECTION_STRING');

const pool = new Pool({
  connectionString: connectionString,
})

module.exports = pool;
