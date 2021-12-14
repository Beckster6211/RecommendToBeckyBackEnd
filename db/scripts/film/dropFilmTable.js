let { query } = require("../../index");

let statement = `DROP TABLE IF EXISTS filmTable`;

async function dropFilmTable() {
  let result = await query(statement);
  console.log(result);
}

dropFilmTable();
