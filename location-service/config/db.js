const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/uber_locations");
    console.log("MongoDB connected for Location Service");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

module.exports = connectDB;