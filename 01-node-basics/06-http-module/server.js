const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Response", res);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Home page");
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on ${port}`);
});
