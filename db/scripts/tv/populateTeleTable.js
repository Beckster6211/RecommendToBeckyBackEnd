let { query } = require("../../index");
let tele = require("../../../data/tele");

const text = `INSERT INTO teleTable(tvShow, provider, connected, genre, numberOfSeries, description, recommendedBy, beckyOpinion, binged) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)`;

async function populateTeleTable(array) {
  for (let index = 0; index < array.length; index++) {
    let values = [
      array[index].tvShow,
      array[index].provider,
      array[index].connected,
      array[index].genre,
      array[index].numberOfSeries,
      array[index].description,
      array[index].recommendedBy,
      array[index].beckyOpinion,
      array[index].binged,
    ];
    let result = await query(text, values);
    console.log(result);
  }
}

populateTeleTable(tele);
