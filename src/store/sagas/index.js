import { takeEvery, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { fetchMoviesSaga } from './tmdb';

export function* watchTmDB() {
  yield all([
    takeEvery(actionTypes.TMDB_INITIATE_FETCH_MOVIES, fetchMoviesSaga),
  ]);
}
