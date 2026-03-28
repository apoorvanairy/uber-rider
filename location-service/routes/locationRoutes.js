const express = require("express");
const router = express.Router();

const { addLocation, getLocations } = require("../controller/locationController");

router.post("/add", addLocation);
router.get("/", getLocations);

module.exports = router;