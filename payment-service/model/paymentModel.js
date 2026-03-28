const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  riderName: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  paymentStatus: {
    type: String,
    default: "Pending"
  }
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;