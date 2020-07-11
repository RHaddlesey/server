node index.js to start the server

USE npm run dev = if on localhost as a dev


const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.listen(5000);

// this is a node specific import. It uses common JavaScript rather than es2015+ which would be the more familiar
// import express from express

Express is a route handler for Node, so by calling app.get we are creating a new route handler. 
get is a request method like app.post app.put etc

the / is the route portion of the handler - so maybe localhost:5000/

req = request

res = response

res.send sends the JSON as a plain JavaScript object ({}). This closes the response and returns the object. It is an arrow function.

app.listen(5000) this is node.js listening to anything on that port.

COOKIE SESSION WITH EXPRESS

2 servers! react is npm start in the client folder and the server is npm run dev - but we want them to work together with just one command. So we will use concurrently
