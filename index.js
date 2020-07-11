const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const { initialize } = require("passport");
// I had to switch the order of load bellow to stop errors because we needed the model to load before the passport file calls it
require("./models/User");
require("./services/passport");
// const authRoutes = require("./routes/authRoutes")

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    // this equates to 30 days - 30 * 24hours * 60 minutes * 60 secs * 1000 to make it milliseconds. So the cookie will last 30 days
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());
// make a cookie, then use the cookie/token

// authRoutes(app);

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
// if on Heroku, find and use their port || or in dev use 5000
app.listen(PORT);

// this is a node specific import. It uses common JavaScript rather than es2015+ which would be the more familiar
// import express from express
