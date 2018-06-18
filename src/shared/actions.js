import fetch from 'isomorphic-fetch';
import * as R from 'ramda';
import km from 'keymirror';

export const ActionTypes = km({
  FetchPopularRepos: null,
  ToggleLoading: null,
});

const toggleLoad = loading => ({
  type: ActionTypes.ToggleLoading,
  payload: { loading },
});

export const fetchPopularRepos = (language = 'all') => dispatch => {
  const encodedURI = encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  );

  dispatch(toggleLoad(true));
  return fetch(encodedURI)
    .then(data => data.json())
    .then(R.prop('items'))
    .then(data =>
      dispatch({
        type: ActionTypes.FetchPopularRepos,
        payload: { repos: data, loading: false },
      })
    )
    .catch(error => {
      console.warn(error);
      return null;
    });
};
