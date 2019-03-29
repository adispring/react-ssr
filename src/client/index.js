import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import routes from '../shared/routes';
import { matchPath } from 'react-router-dom';



import '../shared/style.css';

import configureStore from '../shared/store';
import App from '../shared/App';

const initialState = window.INITIAL_STATE || {};
delete window.INITIAL_STATE;

const { history, store } = configureStore(initialState);
history.listen((location) => {
  const activeRoute = routes.find(url => matchPath(location.pathname, url)) || {};
  console.log(activeRoute);
  // listen history change and getDataHere
  // use ComponentDidUpdate will make the compoent big
})
hydrate(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);

