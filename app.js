const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const teamRoutes = require("./routes/teamRoutes");
const projectRoutes = require("./routes/projectRoutes");
const sprintRoutes = require("./routes/sprintRoutes");
const retroItemRoutes = require("./routes/retroItemRoutes");
const dbConfig = require("./config/db");

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/teams", teamRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/sprints", sprintRoutes);
app.use("/api/retro-items", retroItemRoutes);

// Connect to DB
mongoose
  .connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("*** MongoDB connected... ***"))
  .catch((err) => console.log("*** MongoDB Failed ***", err));

module.exports = app;
