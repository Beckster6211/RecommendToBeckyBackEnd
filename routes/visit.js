const express = require("express");
const router = express.Router();

const {
  getAllVisit,
  addVisit,
  deleteVisit,
  updateVisit,
} = require("../models/visit");

router.get("/", async (req, res, next) => {
  try {
    const result = await getAllVisit();
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
    const newVisit = await addVisit(data);
    console.log({ newVisit });
    res.json({ success: true, payload: newVisit });
  } catch (err) {
    console.log(err);
  }
  next();
});

router.delete("/:id", async (req, res, next) => {
  try {
    let id = req.params.id;
    let delVisit = await deleteVisit(id);
    res.json({ success: true, payload: delVisit });
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
    let updatedVisit = await updateVisit(id, update);
    // console.log({ updatedVisit });
    res.json({ success: true, payload: updatedVisit });
  } catch (error) {
    console.log(error);
  }
  next();
});

module.exports = router;
