const express = require("express");
const router = express.Router();
const usercontroller = require("../controller/adminlogin");

router.post("/", usercontroller);

module.exports = router;
