const Ride = require("../models/rideModel");

const bookRide = async (req, res) => {
  try {
    const { pickupLocation, dropLocation } = req.body;

    const newRide = new Ride({
      pickupLocation,
      dropLocation,
      riderName: "User"
    });

    await newRide.save();

    res.json({ message: "Ride booked successfully", ride: newRide });
  } catch (error) {
    res.status(500).json({ error: "Ride booking failed" });
  }
};

const getRides = async (req, res) => {
  try {
    const rides = await Ride.find();
    res.json(rides);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch rides" });
  }
};

module.exports = {
  bookRide,
  getRides
};