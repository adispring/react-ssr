import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const App = props => <main className={style.hello}>Hello, {props.data}</main>;

App.propTypes = {
  data: PropTypes.string.isRequired,
};
export default App;
