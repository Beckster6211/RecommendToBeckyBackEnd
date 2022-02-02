const { query } = require("../db");

async function getAllTele() {
  const result = await query(`SELECT * FROM teleTable`);
  // console.log(result.rows);
  return result.rows;
}

async function addTele(newTele) {
  console.log({ newTele });
  let teleShow = newTele.tvShow;
  console.log({ teleShow });
  let teleProvider = newTele.provider;
  console.log({ teleProvider });
  let teleConnected = newTele.connected;
  console.log({ teleConnected });
  let teleGenre = newTele.genre;
  console.log({ teleGenre });
  let teleNumberOfSeries = newTele.numberOfSeries;
  console.log({ teleNumberOfSeries });
  let teleDescription = newTele.description;
  console.log({ teleDescription });
  let recommendedBy = newTele.recommendedBy;
  console.log({ recommendedBy });
  let binged = false;
  console.log({ binged });
  let beckyOpinion = "🤷‍♀️";
  console.log({ beckyOpinion });

  const result = await query(
    `INSERT INTO teleTable(tvShow, provider, connected, genre, numberOfSeries, description, recommendedBy, beckyOpinion, binged)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;`,
    [
      teleShow,
      teleProvider,
      teleConnected,
      teleGenre,
      teleNumberOfSeries,
      teleDescription,
      recommendedBy,
      beckyOpinion,
      binged,
    ]
  );
  console.log(result);
  console.log(result.rows);
  return result.rows;
}

async function deleteTele(id) {
  const result = await query(
    `DELETE FROM teleTable WHERE id = $1 RETURNING id`,
    [id]
  );
  return result.rows[0];
}

async function updateTele(id, updatedTele) {
  //   console.log("inside models");
  const {
    tvShow,
    provider,
    connected,
    genre,
    numberOfSeries,
    description,
    recommendedBy,
    beckyOpinion,
    binged,
  } = updatedTele;
  //   console.log({ updatedTele });
  const result = await query(
    `UPDATE teleTable SET tvShow = $2, provider = $3, connected = $4, genre = $5, numberOfSeries = $6, description = $7, recommendedBy = $8, beckyOpinion = $9, binged = $10 WHERE id = $1 RETURNING *`,
    [
      id,
      tvShow,
      provider,
      connected,
      genre,
      numberOfSeries,
      description,
      recommendedBy,
      beckyOpinion,
      binged,
    ]
  );
  //   console.log("result.rows");
  //   console.log(result.rows);
  return result.rows;
}

module.exports = {
  getAllTele,
  addTele,
  deleteTele,
  updateTele,
};
