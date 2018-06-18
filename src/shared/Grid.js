import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { fetchPopularRepos } from './actions';

class Grid extends Component {
  componentDidMount() {
    if (R.isEmpty(this.props.repos)) {
      this.props.fetchPopularRepos(this.props.match.params.id);
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchPopularRepos(this.props.match.params.id);
    }
  }
  render() {
    const { repos, loading } = this.props;
    console.log(R.omit(['repos'], this.props));
    if (loading === true) {
      return <p>LOADING</p>;
    }
    /* eslint camelcase: 0 */
    return (
      <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
        {repos.map(({ name, owner, stargazers_count, html_url }) => (
          <li key={name} style={{ margin: 30 }}>
            <ul>
              <li>
                <a href={html_url}>{name}</a>
              </li>
              <li>@{owner.login}</li>
              <li>{stargazers_count} stars</li>
            </ul>
          </li>
        ))}
      </ul>
    );
  }
}

Grid.fetchInitialData = fetchPopularRepos;

Grid.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  fetchPopularRepos: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = R.path(['grid']);
const mapDispatchToProps = {
  fetchPopularRepos,
};

export default R.compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Grid);
