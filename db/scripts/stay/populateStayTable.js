let { query } = require("../../index");
let stay = require("../../../data/stay");

const text = `INSERT INTO stayTable(what, location, details, recommendedBy, beckyOpinion, stayed) VALUES($1, $2, $3, $4, $5, $6)`;

async function populateStayTable(array) {
  for (let index = 0; index < array.length; index++) {
    let values = [
      array[index].what,
      array[index].location,
      array[index].details,
      array[index].recommendedBy,
      array[index].beckyOpinion,
      array[index].stayed,
    ];
    let result = await query(text, values);
    console.log(result);
  }
}

populateStayTable(stay);
