// server.js is the entry point
// The connection to the database is defined in connection.js and managed via mongoose
// The API routes are defined in movie.routes.js which then referrences movie.controllers.js
// The CRUD functions are defined in movie.controllers.js as API calls.
// The CRUD functions in movie.controllers.js reference the movie model defined in movie.model.js
// Finally, mongoose is referenced in movie.model.js

// e.g.: express.use(Router().post("/movie", addMovie))

require("./db/connection");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const movieRouter = require("./movie/movie.routes");
const userRouter = require("./user/user.routes");

// .use method runs middleware whenever there is a call to express but before the request is passed to the routes
// express.json() allows express to use json as the body inside a request
app.use(express.json());
app.use(cors());

// express.use(Router.post("localhost:5000/movie/", addMovie))
app.use(movieRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.once("open", () => console.log("Connected to database"));

// the port and the url together form the endpoint

// app.get("/stuff", (request, response) => {
//     // controller callback function for when this route has been hit
//     // request is an object to be sent to the server
//     // response is an object sent back by the srver
//     response.send("This is the response")
// })

// look at express documentation and go through the getting started tutorials
// we will be making a rest api
// how will we be replacing the cli to interface with as database manager, e.g. sequelize or mongoose?

// You cant send a request body with a get or delete request

// node src/server.js

// Task:

// • Build a REST API that takes http requests that allows CRUD operations on a database layer.

// • You must use at least GET, POST, PUT and DELETE.

// • Controllers and Routes must exist in separate files.

// • Test all endpoints with TC/Insomnia/Postman.

// Stretch goal- Create controllers and Routes for 2 separate models/purposes (movies and users).

// Express.js is a back-end Node framework that
// allows an app to transfer data over http
// requests.

// As an NPM library, Express gives us a variety of
// methods to build a web server in Node.

// Express allows us to listen on certain
// paths and deal with a HTTP request
// before sending a HTTP response.

// A REST API, and most Web Servers, consist of endpoints.
// And endpoints are made of three key components:
// • HTTP Methods
// • Paths
// • Controllers

// HTTP Methods (Verbs)
// • GET - On a GET method an endpoint should be returning static information or
// reading a database.
// • POST - On a POST method, data should be sent in the http request to be used
// by the controller in some way (creating a database entry).
// • PUT/PATCH - The PUT and PATCH methods handle update requests, for
// instance updating data in a database.
// • DELETE - Fairly self-explanatory, data should be deleted on a DELETE method.

// Paths (Routes)
// A path or route is the URL that targets a particular endpoint
// from a HTTP request.
// e.g. http://localhost:5000/user
// The path is “/user”

// Controllers
// A controller is fundamentally a function that triggers
// when an endpoint is hit.
// The key difference is a controller only takes two
// arguments, the request object and the response object.

// In basic terms, a (software) web server is an
// app that accepts requests over the web and
// serves data or files as a response.

// Usually accessed via a browser over HTTP requests.
// The web server will manipulate the request in some
// way and then send a response back to the browser.

// Think of the Web Server like a kitchen in a restaurant.
// The waiting staff are the HTTP routes and you are the browser.
// When you place your order with the staff, they take the order to the
// kitchen, they prepare it, and then the waiting staff bring it to you.
// A Web Server runs in exactly the same way.

// Task:

// • Create two middleware functions that deal with password hashing.

// • Use the BcryptJS npm package.

// • One middleware should hash the password before it is stored in the DB on user creation.

// • The second middleware should decrypt the hashed password to compare against the original password on a login route.

// Stretch goal - Create middleware that checks if a email is structured like an actual email (name@domain.com).

// Folder structure should follow the microservices architecture pattern.
