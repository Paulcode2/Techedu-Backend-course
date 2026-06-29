// Middlewares are functions that executes during the request to the server
// Params, query string and Route params
// Json basics
const express = require("express");
const app = express();
const logger = require("./logger");
const morgan = require("morgan");
const authorize = require("./auth");
// req => middleware => res

// 1. use vs route
// options - our own / express / third party
// app.use(express.static("./public"));
app.use(morgan("tiny"));
app.use([logger, authorize]);
// app.use("/api", logger);

app.get("/", (req, res) => {
  res.send("<h1>Home</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});
app.get("/api/products", (req, res) => {
  res.send("<h1>Products</h1>");
});
app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("<h1>Items</h1>");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
