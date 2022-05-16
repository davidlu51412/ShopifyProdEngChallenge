"use strict";

const Item = require("../models/item");
const { db } = require("../config");

const addItem = async (req, res, next) => {
  try {
    const data = req.body;
    await db.collection("Items").doc().set(data);
    res.send("Record saved successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllItems = async (req, res, next) => {
  try {
    const items = await db.collection("Items");
    const data = await items.get();
    const itemsArray = [];
    if (data.empty) {
      res.status(404).send("No item record found");
    } else {
      data.forEach((doc) => {
        const item = new Item(
          doc.id,
          doc.data().title,
          doc.data().description,
          doc.data().location
        );
        itemsArray.push(item);
      });
      res.send(itemsArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getItem = async (req, res, next) => {
  try {
    const id = req.params.id;
    const items = await db.collection("Items").doc(id);
    const data = await items.get();
    if (!data.exists) {
      res.status(404).send("Item with the given ID not found");
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateItem = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const items = await db.collection("Items").doc(id);
    await items.update(data);
    res.send("Item record updated successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteItem = async (req, res, next) => {
  try {
    const id = req.params.id;
    await db.collection("Items").doc(id).delete();
    res.send("Record deleted successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addItem,
  getAllItems,
  getItem,
  updateItem,
  deleteItem,
};
