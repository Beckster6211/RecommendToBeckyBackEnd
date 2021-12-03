let { query } = require("../../index");

let statement = `DROP TABLE IF EXISTS readTable`;

async function dropReadTable() {
  let result = await query(statement);
  console.log(result);
}

dropReadTable();
