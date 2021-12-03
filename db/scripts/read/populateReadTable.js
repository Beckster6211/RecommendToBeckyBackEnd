let { query } = require("../../index");
let read = require("../../../data/read");

const text = `INSERT INTO readTable(book, author, connected, genre, numberOfBooks, description, recommendedBy, beckyOpinion, read) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)`;

async function populateReadTable(array) {
  for (let index = 0; index < array.length; index++) {
    let values = [
      array[index].book,
      array[index].author,
      array[index].connected,
      array[index].genre,
      array[index].numberOfBooks,
      array[index].description,
      array[index].recommendedBy,
      array[index].beckyOpinion,
      array[index].read,
    ];
    let result = await query(text, values);
    console.log(result);
  }
}

populateReadTable(read);
