import React, { useEffect, useCallback, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import * as actions from '../../store/actions';
import classes from './MovieDetatils.module.css';

export default function MovieDetails() {
  let { id } = useParams();
  const movie = useSelector(state => state.tmdb.movie);

  const dispatch = useDispatch();
  const tmdbFetchMovie = useCallback(
    id => dispatch(actions.tmdbInitiateFetchMovie(id)),
    [dispatch]
  );

  useEffect(() => {
    window.scroll(0, 0);
    tmdbFetchMovie(id);
  }, [id, tmdbFetchMovie]);

  return (
    <Fragment>
      <div
        className={classes.Backdrop}
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/w500${movie.backdrop_path}")`,
        }}>
        <div className={classes.Gradient}></div>
      </div>
      <div className={classes.Main}>
        <div className={classes.PosterRow}>
          <div
            className={classes.Poster}
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/w500${movie.poster_path}")`,
            }}></div>
        </div>
        <div className={classes.MainRow}>
          <div className={classes.Title}>{movie.original_title}</div>
          <div className={classes.Overview}>{movie.overview}</div>
        </div>
      </div>
    </Fragment>
  );
}
