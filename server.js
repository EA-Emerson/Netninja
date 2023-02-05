const express = require('express');
const jsonServer = require('json-server');

const app = express();
const server = jsonServer.create();
const router = jsonServer.router('data/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
app.use(express.static('build'));
app.use('/api', server);

app.listen(8000, () => {
  console.log('JSON Server is running on port 8000');
});
