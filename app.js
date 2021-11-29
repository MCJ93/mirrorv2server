const http = require('http');
const url = require('url');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const FILE_PATH = './../MirrorAngular/mirror/src/app/bottom-container/youtube/vidId.ts';

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const vidId = queryObject ? queryObject.vidId : "";

  if (vidId) {
    const fileContent = `export const vidId = "${vidId}"`;

    fs.writeFile(FILE_PATH, fileContent, function (err) {
      if (err) return console.log(err);
    });
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
