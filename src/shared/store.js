import { createStore, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

export default function configureStore(
  initialState = {},
  url = '/',
  fromServer
) {
  // initialState will always be Object{} on the server...
  // this will pass to the client so that it will be able to
  // initialize with what the server originally rendered

  const history = fromServer
    ? createMemoryHistory({
        initialEntries: [url],
      })
    : createBrowserHistory();

  // once we init the routerMiddleware with this `history`,
  // compose with devtools (dev) or just apply it (prod)
  const initializedRouterMW = routerMiddleware(history);
  // const middleware = process.env.NODE_ENV === 'development' ?
  //   composeWithDevTools(applyMiddleware(initializedRouterMW, thunk)) :
  //   applyMiddleware(initializedRouterMW, thunk);
  const composedEnhancers = composeWithDevTools(
    applyMiddleware(initializedRouterMW, thunk)
  );

  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composedEnhancers
  );

  return { history, store };
}
