const express = require("express");
const router = express.Router();

const { makePayment, getPayments } = require("../controller/paymentController");

router.post("/pay", makePayment);
router.get("/", getPayments);

module.exports = router;