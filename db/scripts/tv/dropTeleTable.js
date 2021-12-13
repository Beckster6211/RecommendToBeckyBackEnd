let { query } = require("../../index");

let statement = `DROP TABLE IF EXISTS teleTable`;

async function dropTeleTable() {
  let result = await query(statement);
  console.log(result);
}

dropTeleTable();
