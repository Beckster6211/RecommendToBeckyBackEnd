const express = require("express");
const router = express.Router();

const {
  getAllTele,
  //   addRead,
  //   deleteRead,
  //   updateRead,
} = require("../models/tele");

router.get("/", async (req, res, next) => {
  try {
    const result = await getAllTele();
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

router.patch("/:id", async (req, res, next) => {
  try {
    // console.log("inside route");
    let id = req.params.id;
    let update = req.body;
    // console.log("patch request");
    // console.log({ update });
    let updatedRead = await updateRead(id, update);
    // console.log({ updatedRead });
    res.json({ success: true, payload: updatedRead });
  } catch (error) {
    console.log(error);
  }
  next();
});
*/
module.exports = router;
