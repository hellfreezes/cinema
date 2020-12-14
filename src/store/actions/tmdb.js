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

export const tmdbInitiateFetchGenres = config => {
  return {
    type: actionTypes.TMDB_INITIATE_FETCH_GENRES,
    config,
  };
};

export const tmdbFetchGenres = (genres, config) => {
  return {
    type: actionTypes.TMDB_FETCH_GENRES,
    genres,
    config,
  };
};

export const tmdbInitiateFetchMovie = id => {
  return {
    type: actionTypes.TMDB_INITIATE_FETCH_MOVIE,
    id,
  };
};

export const tmdbFetchMovie = movie => {
  return {
    type: actionTypes.TMDB_FETCH_MOVIE,
    movie,
  };
};
