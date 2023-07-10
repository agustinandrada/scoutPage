const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mainRouter = require("./routes");
require("dotenv").config();
const app = express();

app.use(morgan("dev"));

app.use(bodyParser.json({ limit: "50mb" }));

app.use(
  cors({
    origin: ["http://localhost:3001"],
    credentials: true,
    methods: "GET, POST, OPTIONS, PUT, DELETE, PATCH",
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept",
  })
);

app.use("/", mainRouter);

module.exports = app;
