const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there me dude" });
});

const PORT = process.env.PORT || 5000;
// if on Heroku, find and use their port || or in dev use 5000
app.listen(PORT);

// this is a node specific import. It uses common JavaScript rather than es2015+ which would be the more familiar
// import express from express
