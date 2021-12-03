const express = require("express");
const router = express.Router();

const {
  getAllRead,
  addRead,
  deleteRead,
  //   updateVisit,
} = require("../models/read");

router.get("/", async (req, res, next) => {
  try {
    const result = await getAllRead();
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
    const newRead = await addRead(data);
    console.log({ newRead });
    res.json({ success: true, payload: newRead });
  } catch (err) {
    console.log(err);
  }
  next();
});

router.delete("/:id", async (req, res, next) => {
  try {
    let id = req.params.id;
    let delRead = await deleteRead(id);
    res.json({ success: true, payload: delRead });
  } catch (err) {
    console.log(err);
  }
  next();
});
/*
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
*/
module.exports = router;
