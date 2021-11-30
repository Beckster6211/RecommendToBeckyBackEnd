let { query } = require("../../index");

let sqlStatement = `CREATE TABLE IF NOT EXISTS visitTable(
    id SERIAL PRIMARY KEY, 
    what TEXT,
    location TEXT DEFAULT '',
    why TEXT DEFAULT '',
    recommendedBy TEXT DEFAULT '',
    beckyOpinion TEXT DEFAULT '',
    visited BOOLEAN DEFAULT false
);`;

async function createVisitTable() {
  let result = await query(sqlStatement);
  console.log(result);
}

createVisitTable();
