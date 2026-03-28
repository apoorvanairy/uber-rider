const express = require("express");

const router = express.Router();

router.get("/users", (req, res) => {
  res.send("User service route");
});

router.get("/rides", (req, res) => {
  res.send("Ride service route");
});

router.get("/payments", (req, res) => {
  res.send("Payment service route");
});

router.get("/locations", (req, res) => {
  res.send("Location service route");
});

module.exports = router;