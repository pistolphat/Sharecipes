const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const recipeController = require("./controllers/recipes");
const recipeModels = require("./models/Recipes");
const app = express();

app.set("view engine", "hbs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true })); //interprets key value pairs in URLs
app.use(bodyParser.json()); //interprets a stringified JSON object on the request body

app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  recipeModels.find({}).then(recipe => {
    res.render("index", { recipe });
  });
});

app.use("/recipes", recipeController);

app.set('port', process.env.PORT || 3001)

  app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
  })










// app.listen(3000, () => {
//   console.log("Server running on Port 3000");
// });

// app.get("/", (req, res) => {
//   commentModels.find({}).then(comment => {
//     res.render("index", { comment });
//   });
// });

// app.use('/recipes', commentController)

// const commentController = require("./controllers/comments");
// const commentModels = require("./models/Comments");