const { query } = require("../db");
// const { food } = require("../food"); // think dont need this in food models file

async function getAllStay() {
  const result = await query(`SELECT * FROM stayTable`);
  // console.log(result.rows);
  return result.rows;
}

async function addStay(stay) {
  console.log({ stay });
  let stayWhat = stay.what;
  console.log({ stayWhat });
  let stayLocation = stay.location;
  console.log({ stayLocation });
  let stayDetails = stay.details;
  console.log({ stayDetails });
  let recommendedBy = stay.recommendedBy;
  console.log({ recommendedBy });
  let stayed = false;
  console.log({ stayed });
  let beckyOpinion = "🤷‍♀️";
  console.log({ beckyOpinion });

  const result = await query(
    `INSERT INTO stayTable(what, location, details, recommendedBy, beckyOpinion, stayed)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
    [stayWhat, stayLocation, stayDetails, recommendedBy, beckyOpinion, stayed]
  );
  console.log(result);
  console.log(result.rows);
  return result.rows;
}

async function deleteStay(id) {
  const result = await query(
    `DELETE FROM stayTable WHERE id = $1 RETURNING id`,
    [id]
  );
  return result.rows[0];
}

async function updateStay(id, updatedStay) {
  // console.log("inside models");
  const { what, location, details, recommendedby, beckyopinion, stayed } =
    updatedStay;
  // console.log({ updatedVisit });
  const result = await query(
    `UPDATE stayTable SET what = $2, location = $3, details = $4, recommendedBy = $5, beckyOpinion = $6, stayed = $7 WHERE id = $1 RETURNING *`,
    [id, what, location, details, recommendedby, beckyopinion, stayed]
  );
  // console.log("result.rows");
  // console.log(result.rows);
  return result.rows;
}

module.exports = {
  getAllStay,
  addStay,
  deleteStay,
  updateStay,
};
