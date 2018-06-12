import React from 'react';
import PropTypes from 'prop-types';

const App = props => (
  <div>
    <h1>hello world {props.isMobile ? 'mobile' : 'desktop'}</h1>
  </div>
);

App.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default App;
