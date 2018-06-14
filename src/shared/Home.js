import React from 'react';
import PropTypes from 'prop-types';

const Home = props => (
  <div>
    <h1>Welcom {props.user}</h1>
  </div>
);

Home.propTypes = {
  user: PropTypes.bool.isRequired,
};

export default Home;
