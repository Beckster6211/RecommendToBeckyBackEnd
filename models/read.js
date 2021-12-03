const { query } = require("../db");
// const { food } = require("../food"); // think dont need this in food models file

async function getAllRead() {
  const result = await query(`SELECT * FROM readTable`);
  // console.log(result.rows);
  return result.rows;
}

async function addRead(newRead) {
  console.log({ newRead });
  let readBook = newRead.book;
  console.log({ readBook });
  let readAuthor = newRead.author;
  console.log({ readAuthor });
  let readConnected = newRead.connected;
  console.log({ readConnected });
  let readGenre = newRead.genre;
  console.log({ readGenre });
  let readNumberOfBooks = newRead.numberOfBooks;
  console.log({ readNumberOfBooks });
  let readDescription = newRead.description;
  console.log({ readDescription });
  let recommendedBy = newRead.recommendedBy;
  console.log({ recommendedBy });
  let read = false;
  console.log({ read });
  let beckyOpinion = "🤷‍♀️";
  console.log({ beckyOpinion });

  const result = await query(
    `INSERT INTO readTable(book, author, connected, genre, numberOfBooks, description, recommendedBy, beckyOpinion, read)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;`,
    [
      readBook,
      readAuthor,
      readConnected,
      readGenre,
      readNumberOfBooks,
      readDescription,
      recommendedBy,
      beckyOpinion,
      read,
    ]
  );
  console.log(result);
  console.log(result.rows);
  return result.rows;
}

async function deleteRead(id) {
  const result = await query(
    `DELETE FROM readTable WHERE id = $1 RETURNING id`,
    [id]
  );
  return result.rows[0];
}
/*
async function updateVisit(id, updatedVisit) {
  // console.log("inside models");
  const { what, location, why, recommendedby, beckyopinion, visited } =
    updatedVisit;
  // console.log({ updatedVisit });
  const result = await query(
    `UPDATE visitTable SET what = $2, location = $3, why = $4, recommendedBy = $5, beckyOpinion = $6, visited = $7 WHERE id = $1 RETURNING *`,
    [id, what, location, why, recommendedby, beckyopinion, visited]
  );
  // console.log("result.rows");
  // console.log(result.rows);
  return result.rows;
}
*/
module.exports = {
  getAllRead,
  addRead,
  deleteRead,
  //   updateVisit,
};
