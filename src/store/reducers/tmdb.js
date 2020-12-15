import * as actionTypes from '../actions/actionTypes';
import { GENRES } from '../../utils/genres';

const initialState = {
  movie: {},
  movies: {},
  genres: {},
  similar: [],
};

const fetchGenres = (state, action) => {
  const fetchedGenres = [];
  if (action.genres && Array.isArray(action.genres)) {
    action.genres.forEach(genre => {
      fetchedGenres[genre.id] = genre.name;
    });
  }
  const genres = { ...state.genres };
  genres[action.config] = fetchedGenres;

  console.log(genres);
  return {
    ...state,
    genres,
  };
};

const fetchMovies = (state, action) => {
  let mappedMovies = [];
  if (action.movies && Array.isArray(action.movies)) {
    mappedMovies = action.movies.map(movie => {
      let genresString = '';
      genresString =
        movie.genre_ids &&
        movie.genre_ids.reduce((prev, curr) => {
          return prev + ' ' + (GENRES.tv[curr] + ', ' || '');
        }, '');
      genresString = genresString.slice(0, -2);
      return {
        id: movie.id,
        type: action.config.productType,
        title: movie.title || movie.name,
        image: movie.poster_path,
        backdrop: movie.backdrop_path,
        year: movie.release_date || movie.first_air_date,
        minutes: movie.vote_count,
        genre: genresString,
        miniDeatails: movie.vote_average,
      };
    });
  }

  const movies = { ...state.movies };
  movies[action.config.name] = mappedMovies;

  return {
    ...state,
    movies,
  };
};

const fetchMovie = (state, action) => {
  return {
    ...state,
    movie: action.movie,
    productType: action.productType,
  };
};

const fetchSimilar = (state, action) => {
  let mappedMovies = [];
  if (action.movies && Array.isArray(action.movies)) {
    mappedMovies = action.movies.map(movie => {
      let genresString = '';
      genresString =
        movie.genre_ids &&
        movie.genre_ids.reduce((prev, curr) => {
          return prev + ' ' + (GENRES.tv[curr] + ', ' || '');
        }, '');
      genresString = genresString.slice(0, -2);
      return {
        id: movie.id,
        type: action.productType,
        title: movie.title || movie.name,
        image: movie.poster_path,
        backdrop: movie.backdrop_path,
        year: movie.release_date || movie.first_air_date,
        minutes: movie.vote_count,
        genre: genresString,
        miniDeatails: movie.vote_average,
      };
    });
  }

  const similar = mappedMovies;

  return {
    ...state,
    similar,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TMDB_FETCH_MOVIES:
      return fetchMovies(state, action);
    case actionTypes.TMDB_FETCH_GENRES:
      return fetchGenres(state, action);
    case actionTypes.TMDB_FETCH_MOVIE:
      return fetchMovie(state, action);
    case actionTypes.TMDB_FETCH_SIMILAR:
      return fetchSimilar(state, action);
    default:
      return state;
  }
};

export default reducer;
