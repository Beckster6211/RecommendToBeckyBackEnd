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

async function updateRead(id, updatedRead) {
  //   console.log("inside models");
  const {
    book,
    author,
    connected,
    genre,
    numberofbooks,
    description,
    recommendedby,
    beckyopinion,
    read,
  } = updatedRead;
  //   console.log({ updatedRead });
  const result = await query(
    `UPDATE readTable SET book = $2, author = $3, connected = $4, genre = $5, numberOfBooks = $6, description = $7, recommendedBy = $8, beckyOpinion = $9, read = $10 WHERE id = $1 RETURNING *`,
    [
      id,
      book,
      author,
      connected,
      genre,
      numberofbooks,
      description,
      recommendedby,
      beckyopinion,
      read,
    ]
  );
  //   console.log("result.rows");
  //   console.log(result.rows);
  return result.rows;
}

module.exports = {
  getAllRead,
  addRead,
  deleteRead,
  updateRead,
};
