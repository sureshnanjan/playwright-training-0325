import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;
const name = "Sabir"

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Welcome to the Playwright Training ${name}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
