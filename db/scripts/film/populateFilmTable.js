let { query } = require("../../index");
let film = require("../../../data/film");

const text = `INSERT INTO filmTable(film, provider, connected, genre, description, recommendedBy, beckyOpinion, watched) VALUES($1, $2, $3, $4, $5, $6, $7, $8)`;

async function populateTeleTable(array) {
  for (let index = 0; index < array.length; index++) {
    let values = [
      array[index].film,
      array[index].provider,
      array[index].connected,
      array[index].genre,
      array[index].description,
      array[index].recommendedBy,
      array[index].beckyOpinion,
      array[index].watched,
    ];
    let result = await query(text, values);
    console.log(result);
  }
}

populateTeleTable(film);
