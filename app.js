const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the backend");
  }
  if (req.url === "/about") {
    res.end("About page");
  }
  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find this page you are looking for</p>
    <a href="/">Back home</a>
    `);
  console.log(req);
});
server.listen(5000);
