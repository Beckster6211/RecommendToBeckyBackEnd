const express = require("express");
const app = express();
const cors = require("cors");
// var cookieParser = require("cookie-parser");
// var bodyParser = require('body-parser')
const port = 3001;

const foodRouter = require("./routes/food");
const visitRouter = require("./routes/visit");
const stayRouter = require("./routes/stay");
const readRouter = require("./routes/read");
const teleRouter = require("./routes/tele");
const filmRouter = require("./routes/film");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());

app.use(express.json());
// app.use(cookieParser());

app.use("/food", foodRouter);
app.use("/visit", visitRouter);
app.use("/stay", stayRouter);
app.use("/read", readRouter);
app.use("/tele", teleRouter);
app.use("/film", filmRouter);

// app.listen(port, () => {
//   console.log(`App listening at http://localhost:${port}`);
// });

app.listen(process.env.PORT || 3000);
module.exports = app;
