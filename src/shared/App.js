import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </main>
);

export default App;
