const express = require("express");
//const bodyParser = require("body-parser");
const dotenv = require("dotenv");

//import libs files here...
const userLoginRoute = require("./router/user.Route");
//server code
const app = express();
app.use(express.json());
dotenv.config();
app.use("/admin/login", userLoginRoute);
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.json("Welcome to myserver");
});

app.listen(port, () => {
  console.log(">listening on port " + port);
});
