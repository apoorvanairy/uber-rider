const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Notification Service is running");
});

const PORT = 5005;

app.listen(PORT, () => {
  console.log(`Notification Service running on port ${PORT}`);
});