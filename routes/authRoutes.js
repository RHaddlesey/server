const passport = require("passport");

module.exports = (app) => {
  // route handlers
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));
};

// module.exports is so we can use these handlers on the app defined in index.js
