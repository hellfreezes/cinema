import { takeEvery, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { fetchGenresSaga, fetchMovieSaga, fetchMoviesSaga } from './tmdb';

export function* watchTmDB() {
  yield all([
    takeEvery(actionTypes.TMDB_INITIATE_FETCH_MOVIES, fetchMoviesSaga),
    takeEvery(actionTypes.TMDB_INITIATE_FETCH_GENRES, fetchGenresSaga),
    takeEvery(actionTypes.TMDB_INITIATE_FETCH_MOVIE, fetchMovieSaga),
  ]);
}
