const express = require("express");
const { config } = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/routes");
const mongoose = require("mongoose");

config();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world! The server is running.");
});

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.log("Error in mongoose:", error);
    });
});
