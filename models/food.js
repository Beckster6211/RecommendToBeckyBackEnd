const { query } = require("../db");
const { food } = require("../food");

async function getAllFood() {
  const result = await query(`SELECT * FROM foodTable`);
  console.log(result.rows);
  return result.rows;
}

module.exports = {
  getAllFood,
};
