const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/payments", paymentRoutes);

const PORT = 5003;

app.listen(PORT, () => {
  console.log(`Payment Service running on port ${PORT}`);
});