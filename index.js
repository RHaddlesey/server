const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.listen(5000);

// this is a node specific import. It uses common JavaScript rather than es2015+ which would be the more familiar
// import express from express
