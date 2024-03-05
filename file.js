const http = require("http");
// node -- built in modules --- http,https,fs-(file system), os, path -(utility for creating file and directory paths),events
const server = http.createServer((req, res) => {
  res.end("Hello ,World!");
});
server.listen(3000, () => {
  console.log("server listening on port 30000");
});
