let { query } = require("../../index");

let sqlStatement = `CREATE TABLE IF NOT EXISTS filmTable(
    id SERIAL PRIMARY KEY, 
    film TEXT,
    provider TEXT DEFAULT '',
    connected TEXT DEFAULT '',
    genre TEXT DEFAULT '',
    description TEXT DEFAULT '',
    recommendedBy TEXT DEFAULT '',
    beckyOpinion TEXT DEFAULT '',
    watched BOOLEAN DEFAULT false
);`;

async function createFilmTable() {
  let result = await query(sqlStatement);
  console.log(result);
}

createFilmTable();
