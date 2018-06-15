import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../shared/App';

const port = 8080;
const server = express();

server.use(express.static('public'));
server.get('*', (req, res, next) => {
  const markup = renderToString(<App />);
  console.log(`New request, url: ${req.url}`);
  console.log(`markup: ${markup}`);

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RR</title>
        <script src="/bundle.js" defer></script>
        <link rel = "stylesheet" type = "text/css" href = "/main.css" />
      </head>
      <body>
        <div id="app">${markup}</div>
      </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
