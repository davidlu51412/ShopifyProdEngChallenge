"use strict";

const Location = require("../models/location");
const { db, weatherAPI } = require("../config");
const axios = require("axios");
const https = require("https");

const addLocation = async (req, res, next) => {
  try {
    const data = req.body;
    const location = req.params.location;
    await db.collection("Locations").doc(location).set(data);
    res.send("Record saved successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllLocations = async (req, res, next) => {
  try {
    const locations = await db.collection("Locations");
    const data = await locations.get();
    const locationsArray = [];
    if (data.empty) {
      res.status(404).send("No location record found");
    } else {
      data.forEach((doc) => {
        const location = new Location(
          doc.id,
          doc.data().lat,
          doc.data().lon,
          ""
        );
        locationsArray.push(location);
      });

      res.send(locationsArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getLocationWeather = async (req, res, next) => {
  try {
    const locationsArray = JSON.parse(req.params.data);
    const locationsDict = {};
    for (let i = 0; i < locationsArray.length; i++) {
      const location = locationsArray[i];
      const weatherData = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${weatherAPI}`
      );
      const weatherDesc = `${weatherData.data.weather[0].description} at ${
        Math.round((weatherData.data.main.temp - 273.15) * 9) / 5 + 32
      }° fahrenheit with ${weatherData.data.clouds.all} clouds in the air`;
      location["weather"] = weatherDesc;
      locationsDict[location.location] = location;
    }
    res.send(locationsDict);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addLocation,
  getAllLocations,
  getLocationWeather,
};
