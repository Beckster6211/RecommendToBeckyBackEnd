const express = require("express");
const router = express.Router();

const {
  getAllFilm,
  //   addTele,
  //   deleteTele,
  //   updateTele,
} = require("../models/film");

router.get("/", async (req, res, next) => {
  try {
    const result = await getAllFilm();
    res.json({ success: true, data: result });
  } catch (err) {
    console.log(err);
  }
  next();
});
/*
router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    console.log({ data });
    const newTele = await addTele(data);
    console.log({ newTele });
    res.json({ success: true, payload: newTele });
  } catch (err) {
    console.log(err);
  }
  next();
});

router.delete("/:id", async (req, res, next) => {
  try {
    let id = req.params.id;
    let delTele = await deleteTele(id);
    res.json({ success: true, payload: delTele });
  } catch (err) {
    console.log(err);
  }
  next();
});

router.patch("/:id", async (req, res, next) => {
  try {
    // console.log("inside route");
    let id = req.params.id;
    let update = req.body;
    // console.log("patch request");
    // console.log({ update });
    let updatedTele = await updateTele(id, update);
    // console.log({ updatedTele });
    res.json({ success: true, payload: updatedTele });
  } catch (error) {
    console.log(error);
  }
  next();
});
*/
module.exports = router;
