const express = require("express");
const cors = require("cors");

const app = express();

const articleRouter = require("./routes/articles");

const dotenv = require("dotenv").config();
const { PORT, URI } = process.env;
const mongoose = require("mongoose");

mongoose.connect(URI).then(() => {
  console.log("====================================");
  console.log("Database Connected");
  console.log("====================================");
});

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/article", articleRouter);

app.listen(PORT || 5000, () => {
  console.log("====================================");
  console.log(`Listening on port ${PORT}`);
  console.log("====================================");
});
