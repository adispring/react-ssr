import express from 'express';

const port = 8080;
const server = express();
server.get('/', (req, res) => {
  res.send('Hello, World');
})
server.listen(port);
console.log(`server is listening to port: ${port}`);
