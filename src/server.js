const { port } = require("./config/env");
const { connectMongoDB } = require("./config/mongo");

const express = require("express");
const app = express();

app.use(express.json());

// API routes
app.use("/squires", require("./routes/squires.routes"));

async function start() {
  await connectMongoDB();

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

start();
