import React, { useEffect, useCallback, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import * as actions from '../../store/actions';
import classes from './MovieDetatils.module.css';

export default function MovieDetails({ type }) {
  let { id } = useParams();

  const movie = useSelector((state) => state.tmdb.movie);

  const dispatch = useDispatch();
  const tmdbFetchMovie = useCallback(
    (id, type) => dispatch(actions.tmdbInitiateFetchMovie(id, type)),
    [dispatch]
  );

  useEffect(() => {
    window.scroll(0, 0);
    tmdbFetchMovie(id, type);
  }, [id, type, tmdbFetchMovie]);

  const backdropImage = movie.backdrop_path
    ? `url("https://image.tmdb.org/t/p/w500${movie.backdrop_path}")`
    : null;
  const posterImage = movie.poster_path
    ? `url("https://image.tmdb.org/t/p/w500${movie.poster_path}")`
    : null;

  return (
    <Fragment>
      <div
        className={classes.Backdrop}
        style={{
          backgroundImage: backdropImage,
        }}
      >
        <div className={classes.Gradient}></div>
      </div>
      <div className={classes.Main}>
        <div className={classes.PosterRow}>
          <div
            className={classes.Poster}
            style={{
              backgroundImage: posterImage,
            }}
          ></div>
        </div>
        <div className={classes.MainRow}>
          <div className={classes.Title}>{movie.original_title}</div>
          <div className={classes.Overview}>{movie.overview}</div>
        </div>
      </div>
    </Fragment>
  );
}
