"use strict";
const dotenv = require("dotenv");
const assert = require("assert");
const admin = require("firebase-admin");

dotenv.config();

const {
  PORT,
  HOST,
  HOST_URL,
  WEATHER_API_KEY,
  GOOGLE_APPLICATION_CREDENTIALS,
  GEOLOCATION_API_KEY,
} = process.env;

const serviceAccount = require(GOOGLE_APPLICATION_CREDENTIALS);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
assert(PORT, "PORT is required");
assert(HOST, "HOST is required");

module.exports = {
  db: db,
  port: PORT,
  host: HOST,
  url: HOST_URL,
  weatherAPI: WEATHER_API_KEY,
  geolocationAPI: GEOLOCATION_API_KEY,
};
