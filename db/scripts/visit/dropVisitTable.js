let { query } = require("../../index");

let statement = `DROP TABLE IF EXISTS visitTable`;

async function dropVisitTable() {
  let result = await query(statement);
  console.log(result);
}

dropVisitTable();
