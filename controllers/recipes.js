const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipes");

// GET - homepage displaying all recipes
router.get("/", (req, res) => {
  Recipes.find({}).then(result => {
    res.render("recipes/recipes", { recipes });
  });
});

//Clicked to add new item - take to new page
router.get("/new", (req, res) => {
  res.render("recipes/new");
});


//Create new item based on model
router.post("/", (req, res) => {
  Recipe.create({
    title: req.body.title,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions
  }).then(recipe => {
    res.redirect("/recipes");
  });
});


//send user to specific page to edit item
router
  .get("/edit/:id", (req, res) => {
    Recipe.findOne({ _id: req.params.id });
  })
  .then(recipe => {
    res.render("recipes/edit", recipe);
  });


//update specific item by ID
router.put("/:id", (req, res) => {
  Recipe.findOneAndUpdate({ _id: req.params.id }, req.body).then(recipe => {
    res.redirect("/recipes");
  });
});

//Click to show specific item/:id
router.get("/:id", (req, res) => {
  Recipe.findOne({ _id: req.params.id }).then(recipe => {
    res.render("recipes/show", recipe);
  });
});

//delete to be added
router.delete("/:id", (req, res) => {
  Recipe.findOneAndRemove({ _id: req.params.id }).then(recipe => {
    res.redirect("/");
  });
});

module.exports = router;
