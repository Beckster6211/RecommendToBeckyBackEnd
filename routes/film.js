const express = require("express");
const router = express.Router();

const {
  getAllFilm,
  addFilm,
  deleteFilm,
  updateFilm,
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

router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    console.log({ data });
    const newFilm = await addFilm(data);
    console.log({ newFilm });
    res.json({ success: true, payload: newFilm });
  } catch (err) {
    console.log(err);
  }
  next();
});

router.delete("/:id", async (req, res, next) => {
  try {
    let id = req.params.id;
    let delFilm = await deleteFilm(id);
    res.json({ success: true, payload: delFilm });
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
    let updatedFilm = await updateFilm(id, update);
    // console.log({ updatedFilm });
    res.json({ success: true, payload: updatedFilm });
  } catch (error) {
    console.log(error);
  }
  next();
});

module.exports = router;
