require("dotenv").config();
// Express initialization
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
// Passport configuration
// const passport = require("passport");
require("./services/passport");

// Mongoose Connection
const db = require("./config/connection");
db(process.env.MONGODB_URI || "mongodb://localhost/login");

// Express Middleware

// const mongoose = require("mongoose");
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("morgan")("dev"));

// Serve Static
app.use(express.static("app/build"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("app/build"));
}


app.use(require("./route"));
=======
app.use(routes);


// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/app/build/index.html"));
});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);

});

