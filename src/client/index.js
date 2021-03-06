import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import '../shared/style.css';

import configureStore from '../shared/store';
import App from '../shared/App';

const initialState = window.INITIAL_STATE || {};
delete window.INITIAL_STATE;

const { history, store } = configureStore(initialState);

hydrate(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
