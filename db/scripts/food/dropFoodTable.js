let { query } = require("../../index");

let statement = `DROP TABLE IF EXISTS foodTable`;

async function dropTable() {
  let result = await query(statement);
  console.log(result);
}

dropTable();
