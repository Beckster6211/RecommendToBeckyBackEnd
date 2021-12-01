const { query } = require("../db");
// const { food } = require("../data/food");

async function getAllFood() {
  const result = await query(`SELECT * FROM foodTable`);
  // console.log(result.rows);
  return result.rows;
}

async function addFood(food) {
  console.log({ food });
  let foodName = food.food;
  console.log({ foodName });
  let recipe = food.recipe;
  console.log({ recipe });
  let recommendedBy = food.recommendedBy;
  console.log({ recommendedBy });
  let foodDone = false;
  console.log({ foodDone });
  let beckyOpinion = "🤷‍♀️";
  console.log({ beckyOpinion });

  const result = await query(
    `INSERT INTO foodTable(food, recipe, recommendedBy, beckyOpinion, isDone) 
    VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
    [foodName, recipe, recommendedBy, beckyOpinion, foodDone]
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
  const { food, recipe, recommendedby, beckyopinion, isdone } = updatedFood;
  const result = await query(
    `UPDATE foodTable SET food = $2, recipe = $3, recommendedBy = $4, beckyOpinion = $5, isDone = $6 WHERE id = $1 RETURNING *`,
    [id, food, recipe, recommendedby, beckyopinion, isdone]
  );
  return result.rows;
}

module.exports = {
  getAllFood,
  addFood,
  deleteFood,
  updateFood,
};
