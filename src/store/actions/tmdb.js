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

export const tmdbInitiateFetchMovie = (id, productType) => {
  return {
    type: actionTypes.TMDB_INITIATE_FETCH_MOVIE,
    id,
    productType,
  };
};

export const tmdbFetchMovie = (movie, productType) => {
  return {
    type: actionTypes.TMDB_FETCH_MOVIE,
    movie,
    productType,
  };
};

export const tmdbInitiateFetchSimilar = (id, productType) => {
  return {
    type: actionTypes.TMDB_INITIATE_FETCH_SIMILAR,
    id,
    productType,
  };
};

export const tmdbFetchSimilar = (movies, productType) => {
  return {
    type: actionTypes.TMDB_FETCH_SIMILAR,
    movies,
    productType,
  };
};
