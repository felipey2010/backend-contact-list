const express = require("express");
const app = express();
const cors = require("cors");

const requireDir = require("require-dir");
// const routes = require("./src/routes");

const mongoose = require("mongoose");

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

const REACT_DATABASE_URL = process.env.REACT_DATABASE_URL;

//Connection with MongoDB
mongoose
  .connect(REACT_DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .catch(error => {
    console.log(error);
  });
//Test the connection to the database
let db = mongoose.connection;
db.on("error", function (error) {
  console.log(error);
});
db.once("open", function (callback) {
  console.log("Connection Successful!");
});

//MIDDLEWARES
// app.use(express.static("public"));
app.use(express.json());
app.use(cors());
requireDir("./src/models");
app.use("/api", require("./src/routes"));

//define your port number here
app.listen(process.env.PORT || 5000, function () {
  console.log("Now listening for request on port: " + PORT);
});
