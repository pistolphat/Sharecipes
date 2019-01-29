const express = require("express");
const router = express.Router();

const mongoose = require("../db/connection");
const Recipes = mongoose.model("Recipes");

// GET /gifs which will list out all gifs
router.get("/", (req, res) => {
  Recipes.find({}).then(result => {
    res.json(result);
  });
});