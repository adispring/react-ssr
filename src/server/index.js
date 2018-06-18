import express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import serialize from 'serialize-javascript';
import * as R from 'ramda';

import App from '../shared/App';
import routes from '../shared/routes';
import configureStore from '../shared/store';

const PORT = process.env.PORT || 8080;
const server = express();
const matchPathC = R.curryN(2, matchPath);

server.use(express.static('public'));

server.get('*', async (req, res, next) => {
  console.log(`New request, url: ${req.url}`);

  const activeRoute = routes.find(matchPathC(req.url)) || {};
  console.log(`activeRoute: ${activeRoute}`);

  const { store, history } = configureStore({}, req.url, 'fromServer');

  console.log(`req.originalUrl: ${req.originalUrl}`);

  const promise = activeRoute.component.fetchInitialData
    ? store.dispatch(activeRoute.component.fetchInitialData(req.path))
    : Promise.resolve();

  promise.then(data => {
    const preloadedState = store.getState();
    console.log(preloadedState);
    const markup = renderToString(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    );
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SSR with RR</title>
          <script src="/bundle.js" defer></script>
          <script>window.INITIAL_STATE = ${serialize(preloadedState)}</script>
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
