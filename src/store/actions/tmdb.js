import * as actionTypes from './actionTypes';

export const tmdbInitiateFetchMovies = config => {
  return {
    type: actionTypes.TMDB_INITIATE_FETCH_MOVIES,
    config,
  };
};

export const tmdbFetchMovies = (movies, config) => {
  return {
    type: actionTypes.TMDB_FETCH_MOVIES,
    movies,
    config,
  };
};
