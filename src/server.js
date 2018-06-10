import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './app';
import template from './template';

const port = 8080;
const server = express();

server.use('/assets', express.static('assets'));
server.get('/', (req, res) => {
  const isMobile = true;
  const initialState = { isMobile };
  const appString = renderToString(<App {...initialState} />);

  res.send(
    template({
      body: appString,
      title: 'From Server',
      initialState: JSON.stringify(initialState),
    })
  );
});

server.listen(port);
console.log(`Server is listening ${port}`);
