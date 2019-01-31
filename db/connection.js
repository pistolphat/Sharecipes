const mongoose = require("mongoose");

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect("mongodb://localhost/recipes");
}



//enable Promise functions
mongoose.Promise = Promise;

//Export mongoose
module.exports = mongoose;



// we're importing a mongoose instance which has our model configuration attached to it
// const mongoose = require('../models/Recipes')

// // using native ES6 Promises, in place of mongoose's deprecated mpromise library
// // `Promise` will provides us with a couple methods: .then() for success, 
// // and .catch() for errors
// mongoose.Promise = Promise

// // set the uri for connecting to our local mongodb
// const mongoUri = 'mongodb://localhost/Recipes'

// // connect to the database, with the imported mongoose instance
// mongoose
//   // .connect(mongoUri, {useMongoClient: true}) -- error stated useMongoClient not needed
//   .connect(mongoUri)
//   .then(connection => console.log(`Connection established to db 'Recipes'`))
//   .catch(connectionError => console.log('Connection failed!', connectionError))

// // now, our mongoose instance has a configured connection to our local db, in addition
// // to its model configuration
// module.exports = mongoose