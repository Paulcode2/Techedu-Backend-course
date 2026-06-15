const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Welcome to the homepage!");
  }
  if (req.url === "/about") {
    // Blocking code example
    for (let i = 0; i < 1000; i++) {
      console.log("This is a blocking operation");
    }
    return res.end("Welcome to the about page!");
  }
  res.end("Error 404: Page not found");
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
