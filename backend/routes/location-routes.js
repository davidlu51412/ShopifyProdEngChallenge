const express = require("express");
const {
  addLocation,
  getAllLocations,
  getLocationWeather,
  getLocationCoords,
} = require("../controllers/locationController");

const router = express.Router();

router.post("/location/:address", addLocation);
router.get("/locations", getAllLocations);
router.get("/weather/:data", getLocationWeather);
router.get("/coords/:address", getLocationCoords);

module.exports = {
  routes: router,
};
