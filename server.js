/* eslint-disable no-template-curly-in-string */
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Initializing the App
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send();
});

// Initializing the Conection

mongoose.connect("mongodb://localhost:${process.env.DBNUM}/nodeapp", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

requireDir("./src/models");

// Routes
app.use("/api", require("./src/routes"));

dotenv.config();
app.listen(process.env.PORT);
