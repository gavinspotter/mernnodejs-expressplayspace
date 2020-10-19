const http = require("http");

const server = http.createServer((req, res) => {
  console.log("incoming request");
  console.log(req.method, req.url);

  res.setHeader("Content-Type", "text/plain");
  res.end("<h1>success</h1>");
});

server.listen(5000);
