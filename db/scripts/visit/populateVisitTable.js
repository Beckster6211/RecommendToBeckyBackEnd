let { query } = require("../../index");
let visit = require("../../../visit");

const text = `INSERT INTO visitTable(what, location, why, recommendedBy, beckyOpinion, visited) VALUES($1, $2, $3, $4, $5, $6)`;

async function populateVisitTable(array) {
  for (let index = 0; index < array.length; index++) {
    let values = [
      array[index].what,
      array[index].location,
      array[index].why,
      array[index].recommendedBy,
      array[index].beckyOpinion,
      array[index].visited,
    ];
    let result = await query(text, values);
    console.log(result);
  }
}

populateVisitTable(visit);
