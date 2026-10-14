
// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.end('Hello bro! My server is working.');
// });

// server.listen(3000, () => {
//   console.log('Server running on port 3000');
// });

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to SK Mart!');
  } else if (req.url === '/products') {
    res.end('Here are all products');
  } else if (req.url === '/about') {
    res.end('This is SK Mart');
  } else {
    res.statusCode = 404;
    res.end('Page not found');
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
