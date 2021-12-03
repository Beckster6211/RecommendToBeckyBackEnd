let { query } = require("../../index");

let sqlStatement = `CREATE TABLE IF NOT EXISTS readTable(
    id SERIAL PRIMARY KEY, 
    book TEXT,
    author TEXT DEFAULT '',
    connected TEXT DEFAULT '',
    genre TEXT DEFAULT '',
    numberOfBooks INTEGER,
    description TEXT DEFAULT '',
    recommendedBy TEXT DEFAULT '',
    beckyOpinion TEXT DEFAULT '',
    read BOOLEAN DEFAULT false
);`;

async function createReadTable() {
  let result = await query(sqlStatement);
  console.log(result);
}

createReadTable();
