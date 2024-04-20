const express = require("express");
const router = express.Router();
const testapi = require("../controller/test");
router.get("/getusers", testapi);

module.exports = router;
