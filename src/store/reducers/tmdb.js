import * as actionTypes from '../actions/actionTypes';

const initialState = {
  movies: {},
};

const fetchMovies = (state, action) => {
  let mappedMovies = [];
  if (action.movies && Array.isArray(action.movies)) {
    mappedMovies = action.movies.map(movie => ({
      id: movie.id,
      title: movie.title || movie.name,
      image: movie.poster_path,
      backdrop: movie.backdrop_path,
      year: movie.release_date,
      minutes: movie.vote_count,
      genre: '',
      miniDeatails: 'MV',
    }));
  }

  const movies = { ...state.movies };
  movies[action.config.name] = mappedMovies;

  return {
    ...state,
    movies,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TMDB_FETCH_MOVIES:
      return fetchMovies(state, action);
    default:
      return state;
  }
};

export default reducer;
