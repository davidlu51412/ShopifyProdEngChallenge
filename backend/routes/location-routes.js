const express = require("express");
const {
  addLocation,
  getAllLocations,
  getLocationWeather,
} = require("../controllers/locationController");

const router = express.Router();

router.post("/location", addLocation);
router.get("/locations", getAllLocations);
router.get("/weather/:data", getLocationWeather);

module.exports = {
  routes: router,
};
