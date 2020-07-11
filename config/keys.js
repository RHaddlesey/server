// keys.js - figure out if dev or prod

if (process.env.NODE_ENV === "production") {
  // we are in prod
  module.exports = require("./prod");
} else {
  // we are in dev
  module.exports = require("./dev");
  // loads it in and exports the dev file
}


// if we are on Heroku, it will set NODE_ENV = to "production" for us