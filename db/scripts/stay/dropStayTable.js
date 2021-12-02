let { query } = require("../../index");

let statement = `DROP TABLE IF EXISTS stayTable`;

async function dropStayTable() {
  let result = await query(statement);
  console.log(result);
}

dropStayTable();
