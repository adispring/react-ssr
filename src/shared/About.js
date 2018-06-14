import React from 'react';
import PropTypes from 'prop-types';

const About = props => (
  <div>
    <h1>About {props.about}</h1>
  </div>
);

About.propTypes = {
  about: PropTypes.bool.isRequired,
};

export default About;
