let { query } = require("../../index");

let sqlStatement = `CREATE TABLE IF NOT EXISTS teleTable(
    id SERIAL PRIMARY KEY, 
    tvShow TEXT,
    provider TEXT DEFAULT '',
    connected TEXT DEFAULT '',
    genre TEXT DEFAULT '',
    numberOfSeries INTEGER,
    description TEXT DEFAULT '',
    recommendedBy TEXT DEFAULT '',
    beckyOpinion TEXT DEFAULT '',
    binged BOOLEAN DEFAULT false
);`;

async function createTeleTable() {
  let result = await query(sqlStatement);
  console.log(result);
}

createTeleTable();
