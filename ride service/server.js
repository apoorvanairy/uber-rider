const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const rideRoutes = require("./routes/rideRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/rides", rideRoutes);

const PORT = 5002;

app.listen(PORT, () => {
  console.log(`Ride Service running on port ${PORT}`);
});