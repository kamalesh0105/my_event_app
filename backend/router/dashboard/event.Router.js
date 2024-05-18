const express = require("express");
const router = express.Router();
const AddEvents = require("../../controller/dashboard/Event/addEvent");
const getEvents = require("../../controller/dashboard/Event/getEvents");
const multer = require("multer");
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });
const upload = multer();

router.post("/add", upload.single("image"), AddEvents);
router.get("/get", getEvents);
module.exports = router;
