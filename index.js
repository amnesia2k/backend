import http from "http";

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello World</h1>");
});

console.log(document);

server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
