const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Initializing the App
const app = express();
app.use(cors());
app.use(express.json());

// Initializing the Conection
mongoose.connect("mongodb://localhost:27017/nodeapp", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

requireDir("./src/models");

// Routes
app.use("/api", require("./src/routes"));

app.listen(3001);
