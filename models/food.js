const { query } = require("../db");
const { food } = require("../food");

async function getAllFood() {
  const result = await query(`SELECT * FROM foodTable`);
  // console.log(result.rows);
  return result.rows;
}

async function addFood(food) {
  console.log({ food });
  let foodName = food.food;
  console.log({ foodName });
  let recommendedBy = food.recommendedBy;
  console.log({ recommendedBy });
  let foodDone = false;
  console.log({ foodDone });
  let beckyOpinion = "🤷‍♀️";
  console.log({ beckyOpinion });
  const result = await query(
    `INSERT INTO foodTable(food, recommendedBy, beckyOpinion, isDone) 
    VALUES ($1, $2, $3, $4) RETURNING *;`,
    [foodName, recommendedBy, beckyOpinion, foodDone]
  );
  // console.log(result);
  console.log(result.rows);
  return result.rows;
}

async function deleteFood(id) {
  const result = await query(
    `DELETE FROM foodTable WHERE id = $1 RETURNING id`,
    [id]
  );
  return result.rows[0];
}

async function updateFood(id, updatedFood) {
  const { food, recommendedby, beckyopinion, isdone } = updatedFood;
  const result = await query(
    `UPDATE foodTable SET food = $2, recommendedBy = $3, beckyOpinion = $4, isDone = $5 WHERE id = $1 RETURNING *`,
    [id, food, recommendedby, beckyopinion, isdone]
  );
  return result.rows;
}

module.exports = {
  getAllFood,
  addFood,
  deleteFood,
  updateFood,
};
