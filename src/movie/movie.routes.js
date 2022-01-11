const { Router } = require("express");
const movieRouter = Router();
const {
  addMovie,
  listMovies,
  updateMovie,
  deleteMovie,
} = require("./movie.controllers");

// const { hashPassword } = require("../middleware/middleware")

//This defines the route for the endpoint: 'localhost:5000/movie/'

// movieRouter.post("/movie", hashPassword, addMovie);

movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovies);
movieRouter.put("/movie", updateMovie);
movieRouter.delete("/movie/:title", deleteMovie);

module.exports = movieRouter;

//Really should do token auth in middleware
