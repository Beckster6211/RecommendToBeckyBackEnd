const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;

const foodRouter = require("./routes/food");
const visitRouter = require("./routes/visit");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());

app.use(express.json());

app.use("/food", foodRouter);
app.use("/visit", visitRouter);

// app.listen(port, () => {
//   console.log(`App listening at http://localhost:${port}`);
// });

app.listen(process.env.PORT || 3000);
module.exports = app;
