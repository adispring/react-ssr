import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import { StaticRouter, matchPath } from 'react-router-dom';
import * as R from 'ramda';

import App from '../shared/App';
import routes from '../shared/routes';

const PORT = process.env.PORT || 8080;
const server = express();
const matchPathC = R.curryN(2, matchPath);

server.use(express.static('public'));

server.get('*', async (req, res, next) => {
  console.log(`New request, url: ${req.url}`);

  const activeRoute = routes.find(matchPathC(req.url)) || {};
  console.log(`activeRoute: ${activeRoute}`);

  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve();

  promise.then(data => {
    const context = { data };
    const markup = renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SSR with RR</title>
          <script src="/bundle.js" defer></script>
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
          <link rel = "stylesheet" type = "text/css" href = "/main.css" />
        </head>
        <body>
          <div id="app">${markup}</div>
        </body>
      </html>
    `);
  });
});

server.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
