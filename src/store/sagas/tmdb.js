import axios from '../../axios-tmdb';
import { put } from 'redux-saga/effects';

import * as actions from '../actions';

const apiKey = process.env.REACT_APP_TMDB_API_KEY;

export function* fetchMoviesSaga(action) {
  const url = `discover/${action.config.productType}`;
  const params = {
    ...action.config.params,
    api_key: apiKey,
  };

  try {
    const response = yield axios.get(url, { params: { ...params } });
    // console.log(response.data.results);
    yield put(actions.tmdbFetchMovies(response.data.results, action.config));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchGenresSaga(action) {
  const url = `genre/${action.config}/list`;
  const params = {
    api_key: apiKey,
  };

  try {
    const response = yield axios.get(url, { params: { ...params } });
    // console.log(response.data);
    yield put(actions.tmdbFetchGenres(response.data.genres, action.config));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchMovieSaga(action) {
  const url = `/movie/${action.id}`;
  const params = {
    api_key: apiKey,
  };

  try {
    const response = yield axios.get(url, { params: { ...params } });
    console.log(response);
    yield put(actions.tmdbFetchMovie(response.data));
  } catch (error) {
    console.log(error);
  }
}
