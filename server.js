const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//Initializing the App
    const app = express();
    app.use(cors());
    app.use(express.json());
//Initializing the database update adapted from : [ https://github.com/Automattic/mongoose/issues/8156 ] to version problem

mongoose.connect ("mongodb://localhost:27017/nodeapp", {
useUnifiedTopology: true,
useNewUrlParser: true,
});
requireDir("./src/models");



//Routes
app.use("/api", require("./src/routes"));

app.listen(3001);