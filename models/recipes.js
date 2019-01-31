const mongoose = require("../db/connection");

const Schema = mongoose.Schema;

// define a schema where the field-name is the key in the object passed in
// as an argument to mongoose.Schema, and the object values are the data type of that field

const Recipe = new Schema({
  title: String,
  ingredients: String,
  instructions: String,
});

// const Recipe = mongoose.model('Recipe', Recipe)

//export the model
module.exports = mongoose.model('Recipe', Recipe);

// builds a model from the schema, and attaches it to our mongoose instance.
// a model is used to query and change data in the database
//Double schemas into one Model File, Export both.
// module.exports = {
//   Recipes: mongoose.model("Recipes", Recipes),
//   Comments: mongoose.model("Comments", Comments)
// };
