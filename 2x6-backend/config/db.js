const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
});

pool.connect()
  .then(() => console.log('PostgreSQL connected'))
  .catch((err) => {
    console.error('PostgreSQL connection error:', err.stack);
    process.exit(1);
  });

module.exports = pool;
