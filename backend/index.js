"use-strict";
const express = require("express");
const cors = require("cors");
const bodyParse = require("body-parser");
const config = require("./config");
const bodyParser = require("body-parser");
const itemRoutes = require("./routes/item-routes");
const locationRoutes = require("./routes/location-routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/api", itemRoutes.routes);
app.use("/api", locationRoutes.routes);

app.listen(config.port, () => {
  console.log(`Server listening on ${config.port}`);
});
