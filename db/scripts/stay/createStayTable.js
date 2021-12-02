let { query } = require("../../index");

let sqlStatement = `CREATE TABLE IF NOT EXISTS stayTable(
    id SERIAL PRIMARY KEY, 
    what TEXT,
    location TEXT DEFAULT '',
    details TEXT DEFAULT '',
    recommendedBy TEXT DEFAULT '',
    beckyOpinion TEXT DEFAULT '',
    stayed BOOLEAN DEFAULT false
);`;

async function createStayTable() {
  let result = await query(sqlStatement);
  console.log(result);
}

createStayTable();
