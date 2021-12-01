const { query } = require("../db");
// const { food } = require("../food"); // think dont need this in food models file

async function getAllVisit() {
  const result = await query(`SELECT * FROM visitTable`);
  // console.log(result.rows);
  return result.rows;
}

async function addVisit(visit) {
  console.log({ visit });
  let visitWhat = visit.what;
  console.log({ visitWhat });
  let visitLocation = visit.location;
  console.log({ visitLocation });
  let visitWhy = visit.why;
  console.log({ visitWhy });
  let recommendedBy = visit.recommendedBy;
  console.log({ recommendedBy });
  let visited = false;
  console.log({ visited });
  let beckyOpinion = "🤷‍♀️";
  console.log({ beckyOpinion });

  const result = await query(
    `INSERT INTO visitTable(what, location, why, recommendedBy, beckyOpinion, visited)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
    [visitWhat, visitLocation, visitWhy, recommendedBy, beckyOpinion, visited]
  );
  console.log(result);
  console.log(result.rows);
  return result.rows;
}

async function deleteVisit(id) {
  const result = await query(
    `DELETE FROM visitTable WHERE id = $1 RETURNING id`,
    [id]
  );
  return result.rows[0];
}

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

module.exports = {
  getAllVisit,
  addVisit,
  deleteVisit,
  updateVisit,
};
