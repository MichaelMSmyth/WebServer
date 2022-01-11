// This is the model section of the 'Model, View, Controller' design pattern. The model only handles data logic and interacting with the database.

const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  actor: {
    type: String,
    default: "Not specified",
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;