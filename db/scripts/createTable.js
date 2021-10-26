let { query } = require("../index");

let sqlStatement = `CREATE TABLE IF NOT EXISTS foodTable(
    id SERIAL PRIMARY KEY, 
    food TEXT,
    isDone BOOLEAN
);`;

async function createTable() {
  let result = await query(sqlStatement);
  console.log(result);
}

createTable();
