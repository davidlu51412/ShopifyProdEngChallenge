const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
const cities = [
  { label: "New York City, NY", lat: 40, lon: 74 },
  { label: "Los Angeles, CA", lat: 34, lon: 118 },
  { label: "Chicago, IL", lat: 42, lon: 88 },
  { label: "Houston, TX", lat: 30, lon: 95 },
  { label: "Phoenix, AZ", lat: 33, lon: 112 },
];

// gets all the cities and available locations
app.get("/cities", (req, res) => {
  res.json(cities);
});

// returns the info of the item
app.get("/item", (req, res) => {
  const { itemID } = req.query;
  res.json(itemID + " is the item");
});

// returns the weather of a location
app.get("/weather", (req, res) => {
  const { lat, lon } = req.query;
  res.json(lat + lon + " is the location");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
