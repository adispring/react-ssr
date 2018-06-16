import fetch from 'isomorphic-fetch';
import * as R from 'ramda';

export function fetchPopularRepos(language = 'all') {
  const encodedURI = encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  );

  return fetch(encodedURI)
    .then(data => data.json())
    .then(R.prop('items'))
    .catch(error => {
      console.warn(error);
      return null;
    });
}
