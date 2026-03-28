const express = require("express");
const cors = require("cors");
const gatewayRoutes = require("./routes/gatewayRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", gatewayRoutes);

app.get("/", (req, res) => {
  res.send("API Gateway is running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});