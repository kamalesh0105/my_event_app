const express = require("express");
const router = express.Router();
const usercontroller = require("../controller/adminlogin");
const signUp = require("../controller/signup");

router.post("/login", usercontroller);
router.post("/signup", signUp);

module.exports = router;
