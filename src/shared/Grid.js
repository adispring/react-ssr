import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';

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
      loading: !repos,
    };
  }
  componentDidMount() {
    if (!this.state.repos) {
      console.log(this.props);
      this.fetchRepos(this.props.match.params.id);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchRepos(this.props.match.params.id);
    }
  }
  async fetchRepos(lang) {
    this.setState(R.always({ loading: true }));
    const repos = await this.props.fetchInitialData(lang);
    this.setState(R.always({ loading: false, repos }));
  }
  render() {
    const { repos, loading } = this.state;
    if (loading === true) {
      return <p>LOADING</p>;
    }
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
