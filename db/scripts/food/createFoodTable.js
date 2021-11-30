let { query } = require("../../index");

let sqlStatement = `CREATE TABLE IF NOT EXISTS foodTable(
    id SERIAL PRIMARY KEY, 
    food TEXT,
    recipe TEXT DEFAULT '',
    recommendedBy TEXT DEFAULT '',
    beckyOpinion TEXT DEFAULT '',
    isDone BOOLEAN DEFAULT false
);`;

async function createTable() {
  let result = await query(sqlStatement);
  console.log(result);
}

createTable();
