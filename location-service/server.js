const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const locationRoutes = require("./routes/locationRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/locations", locationRoutes);

const PORT = 5004;

app.listen(PORT, () => {
  console.log(`Location Service running on port ${PORT}`);
});