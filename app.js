const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./navbar-app/index.html");
const server = http.createServer((req, res) => {
  // plain
  // console.log(req.method);
  // console.log(req.url);
  // console.log(req);

  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("");
    res.end;
  } else if (url === "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Contact Page</h1>");
    res.end;
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page not found</h1>");
    res.end;
  }
  res.end();
});
server.listen(5000);

// mozilla
// mime type
