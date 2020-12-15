import React, { Fragment, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TopBanner from '../../components/TopBanner/TopBanner';
import Carousel from '../../components/Carousel/Carousel';

import * as actions from '../../store/actions';
import * as fetchPatterns from '../../utils/discoverPatterns';

const Showcase = React.memo(() => {
  const movies = useSelector(state => state.tmdb.movies);

  const dispatch = useDispatch();
  const tmdbInitiateFetchMovies = useCallback(
    config => dispatch(actions.tmdbInitiateFetchMovies(config)),
    [dispatch]
  );

  useEffect(() => {
    tmdbInitiateFetchMovies(fetchPatterns.POPULAR_TV);
    tmdbInitiateFetchMovies(fetchPatterns.POPULAR_KIDS_MOVIES);
  }, [tmdbInitiateFetchMovies]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Fragment>
      <TopBanner />
      <Carousel
        title="Popular TV Shows"
        movies={movies[fetchPatterns.POPULAR_TV.name]}
      />
      <Carousel
        title="Kids & Familiy"
        movies={movies[fetchPatterns.POPULAR_KIDS_MOVIES.name]}
      />
      {/* <Carousel
        title="In Theatres Now!"
        config={fetchPatterns.PRIMARY_RELEASE()}
      />
      <Carousel title="Most Popular" config={fetchPatterns.POPULAR_MOVIES} />
      <Carousel
        title="Popular Drama"
        config={fetchPatterns.POPULAR_DRAMAS(2020)}
      /> */}
    </Fragment>
  );
});

export default Showcase;
