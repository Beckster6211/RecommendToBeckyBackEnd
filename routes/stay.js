const express = require("express");
const router = express.Router();

const {
  getAllStay,
  addStay,
  deleteStay,
  updateStay,
} = require("../models/stay");

router.get("/", async (req, res, next) => {
  try {
    const result = await getAllStay();
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
    const newStay = await addStay(data);
    console.log({ newStay });
    res.json({ success: true, payload: newStay });
  } catch (err) {
    console.log(err);
  }
  next();
});

router.delete("/:id", async (req, res, next) => {
  try {
    let id = req.params.id;
    let delStay = await deleteStay(id);
    res.json({ success: true, payload: delStay });
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
    let updatedStay = await updateStay(id, update);
    // console.log({ updatedVisit });
    res.json({ success: true, payload: updatedStay });
  } catch (error) {
    console.log(error);
  }
  next();
});

module.exports = router;
