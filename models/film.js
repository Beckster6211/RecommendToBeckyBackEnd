const { query } = require("../db");

async function getAllFilm() {
  const result = await query(`SELECT * FROM filmTable`);
  // console.log(result.rows);
  return result.rows;
}

async function addFilm(newFilm) {
  console.log({ newFilm });
  let film = newFilm.film;
  console.log({ film });
  let filmProvider = newFilm.provider;
  console.log({ filmProvider });
  let filmConnected = newFilm.connected;
  console.log({ filmConnected });
  let filmGenre = newFilm.genre;
  console.log({ filmGenre });
  let filmDescription = newFilm.description;
  console.log({ filmDescription });
  let recommendedBy = newFilm.recommendedBy;
  console.log({ recommendedBy });
  let watched = false;
  console.log({ watched });
  let beckyOpinion = "🤷‍♀️";
  console.log({ beckyOpinion });

  const result = await query(
    `INSERT INTO filmTable(film, provider, connected, genre, description, recommendedBy, beckyOpinion, watched)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`,
    [
      film,
      filmProvider,
      filmConnected,
      filmGenre,
      filmDescription,
      recommendedBy,
      beckyOpinion,
      watched,
    ]
  );
  console.log(result);
  console.log(result.rows);
  return result.rows;
}

async function deleteFilm(id) {
  const result = await query(
    `DELETE FROM filmTable WHERE id = $1 RETURNING id`,
    [id]
  );
  return result.rows[0];
}

async function updateFilm(id, updatedFilm) {
  //   console.log("inside models");
  const {
    film,
    provider,
    connected,
    genre,
    description,
    recommendedBy,
    beckyOpinion,
    watched,
  } = updatedFilm;
  //   console.log({ updatedFilm });
  const result = await query(
    `UPDATE filmTable SET film = $2, provider = $3, connected = $4, genre = $5, description = $6, recommendedBy = $7, beckyOpinion = $8, watched = $9 WHERE id = $1 RETURNING *`,
    [
      id,
      film,
      provider,
      connected,
      genre,
      description,
      recommendedBy,
      beckyOpinion,
      watched,
    ]
  );
  //   console.log("result.rows");
  //   console.log(result.rows);
  return result.rows;
}

module.exports = {
  getAllFilm,
  addFilm,
  deleteFilm,
  updateFilm,
};
