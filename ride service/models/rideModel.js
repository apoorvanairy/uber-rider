const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema({
  pickupLocation: {
    type: String,
    required: true
  },
  dropLocation: {
    type: String,
    required: true
  },
  riderName: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "Booked"
  }
});

const Ride = mongoose.model("Ride", rideSchema);

module.exports = Ride;