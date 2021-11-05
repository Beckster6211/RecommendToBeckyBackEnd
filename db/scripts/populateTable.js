let { query } = require("../index");
let food = require("../../food");

const text = `INSERT INTO foodTable(food, recommendedBy, isDone) VALUES($1, $2, $3)`;

async function populateTable(array) {
  for (let index = 0; index < array.length; index++) {
    let values = [
      array[index].food,
      array[index].recommendedBy,
      array[index].isDone,
    ];
    let result = await query(text, values);
    console.log(result);
  }
}

populateTable(food);
