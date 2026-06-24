const express = require("express");
const path = require("path");
const app = express();

// set up static and middleware
// static - file server doesn't have to change
app.use(express.static("./public"));
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
//   Adding to static
//   Server side rendering
// });
app.all("/*splat", (req, res) => {
  res.status(404).send("<h1>Resource Not found</h1>");
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

// API vs SSR
