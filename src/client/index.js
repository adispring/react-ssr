import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '../shared/style.css';

import App from '../shared/App';

hydrate(
  <BrowserRouter>
    <App data="Tyler" />
  </BrowserRouter>,
  document.getElementById('app')
);
