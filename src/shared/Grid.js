import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Grid extends Component {
  constructor(props) {
    super(props);

    let repos;
    if (__isBrowser__) {
      repos = window.__INITIAL_DATA__;
      delete window.__INITIAL_DATA__;
    } else {
      repos = props.staticContext.data;
    }

    this.state = {
      repos,
    };
  }
  render() {
    const { repos } = this.state;

    return (
      <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
        {repos.map(({ name, owner, stargazersCount, htmlUrl }) => (
          <li key={name} style={{ margin: 30 }}>
            <ul>
              <li>
                <a href={htmlUrl}>{name}</a>
              </li>
              <li>@{owner.login}</li>
              <li>{stargazersCount} stars</li>
            </ul>
          </li>
        ))}
      </ul>
    );
  }
}

Grid.propTypes = {
  staticContext: PropTypes.object,
};

export default Grid;
