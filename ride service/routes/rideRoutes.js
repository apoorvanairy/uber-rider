const express = require("express");
const router = express.Router();

const { bookRide } = require("../controller/rideController");

router.post("/book", bookRide);

module.exports = router;