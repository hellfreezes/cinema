import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Carousel.module.css';

import * as actions from '../../store/actions';

import MovieMiniCard from '../../components/MovieMiniCard/MovieMiniCard';

import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPrevIcon from '@material-ui/icons/SkipPrevious';

const Carousel = React.memo(props => {
  const [scroll, setScroll] = useState(0);

  const { config } = props;
  const movies = useSelector(state => state.tmdb.movies);

  const dispatch = useDispatch();
  const tmdbInitiateFetchMovies = useCallback(
    config => dispatch(actions.tmdbInitiateFetchMovies(config)),
    [dispatch]
  );

  useEffect(() => {
    tmdbInitiateFetchMovies(config);
  }, [tmdbInitiateFetchMovies, config]);

  const nextButtonHandler = () => {
    setScroll(scroll + 100);
  };
  const prevButtonHandler = () => {
    scroll > 0 && setScroll(scroll - 100);
  };

  const cardsMap =
    Array.isArray(movies[config.name]) &&
    movies[config.name].map(card => (
      <MovieMiniCard key={card.id} movie={card} moveLeft={scroll} />
    ));

  return (
    <div className={classes.Carousel}>
      <div className={classes.TitleRow}>
        <div className={classes.Title}>{props.title}</div>
        <div className={classes.Actions}>
          <div className={classes.Dots}>
            <div className={classes.Dot}></div>
            <div className={classes.Dot}></div>
            <div className={classes.Dot}></div>
          </div>
        </div>
      </div>

      <div className={classes.Cards}>
        <div
          className={[classes.Side, classes.Previous].join(' ')}
          style={{ font: 'inherit' }}>
          <button>
            <SkipPrevIcon onClick={prevButtonHandler} />
          </button>
        </div>
        {cardsMap}

        <div
          className={[classes.Side, classes.Next].join(' ')}
          style={{ font: 'inherit' }}>
          <button>
            <SkipNextIcon onClick={nextButtonHandler} />
          </button>
        </div>
      </div>
    </div>
  );
});

export default Carousel;
