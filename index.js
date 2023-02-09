const express = require("express");
const dotenv = require("dotenv");
const config = require("./config");
const executeCode = require("./executeCode.route");

dotenv.config();

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
  const serverRun = {
    isRunning: true,
    message: "Backend is running",
  };
  console.log(serverRun);
  res.json(serverRun);
});

app.use("/api/", executeCode);

app.listen(config.PORT, () => {
  console.log(`Backend server is running at http://localhost:${config.PORT}`);
});
