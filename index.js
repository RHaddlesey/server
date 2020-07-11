const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
// I had to switch the order of load bellow to stop errors because we needed the model to load before the passport file calls it
require("./models/User");
require("./services/passport");
// const authRoutes = require("./routes/authRoutes")

mongoose.connect(keys.mongoURI);

const app = express();

// authRoutes(app);

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
// if on Heroku, find and use their port || or in dev use 5000
app.listen(PORT);

// this is a node specific import. It uses common JavaScript rather than es2015+ which would be the more familiar
// import express from express
