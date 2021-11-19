const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const pool = new Pool({
  // host: process.env.PGHOST,
  // database: process.env.PGDATABASE,
  // user: process.env.PGUSER,
  // port: process.env.PGPORT,
  // password: process.env.PGPASSWORD,
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
