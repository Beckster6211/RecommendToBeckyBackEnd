const express = require("express");
const router = express.Router();

const { getAllFood, addFood, deleteFood } = require("../models/food");

router.get("/", async (req, res, next) => {
  try {
    const result = await getAllFood();
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
    const newFood = await addFood(data);
    console.log({ newFood });
    res.json({ success: true, payload: newFood });
  } catch (err) {
    console.log(err);
  }
  next();
});

router.delete("/:id", async (req, res, next) => {
  try {
    let id = req.params.id;
    let delFood = await deleteFood(id);
    res.json({ success: true, payload: delFood });
  } catch (err) {
    console.log(err);
  }
  next();
});

module.exports = router;
