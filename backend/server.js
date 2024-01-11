const express = require("express");
//const bodyParser = require("body-parser");
const dotenv = require("dotenv");

//import libs files here...
const db = require("./libs/includes/Database");
//server code
const app = express();
app.use(express.json());
dotenv.config();
const port = process.env.PORT || 5000;
const conn = db.getconn();
app.get("/", (req, res) => {
  res.json("Welcome to myserver");
});

app.listen(port, () => {
  console.log(">listening on port " + port);
});
