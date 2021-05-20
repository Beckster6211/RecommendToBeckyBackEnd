const express = require("express");
const router = express.Router();

const { getAllFood } = require("../models/food");

router.get("/", async function (req, res, next) {
  try {
    const result = await getAllFood();
    res.json({ success: true, data: result });
  } catch (err) {
    console.log(err);
  }
});
