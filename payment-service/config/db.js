const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/uber_payments");
    console.log("MongoDB connected for Payment Service");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

module.exports = connectDB;