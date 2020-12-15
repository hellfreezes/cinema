import React from 'react';
import { useHistory } from 'react-router-dom';
import classes from './MovieMiniCard.module.css';

import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';

const months = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
};

const MovieMiniCard = ({ movie, moveLeft }) => {
  const history = useHistory();
  const movieDate = new Date(movie.year);
  const dateString = movie.year
    ? months[movieDate.getMonth()] + ' ' + movieDate.getFullYear()
    : null;

  const playCircleClickHandler = (event, id) => {
    history.push(`/${movie.type}/${id}`);
  };

  return (
    <div className={classes.Card} style={{ left: `-${moveLeft}%` }}>
      <div
        className={classes.Canvas}
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/w200${movie.image}")`,
        }}>
        <div className={classes.Backdrop}>
          <div className={classes.BackdropPlay}>
            <PlayCircleFilledWhiteOutlinedIcon
              style={{ font: 'inherit' }}
              onClick={event => playCircleClickHandler(event, movie.id)}
            />
          </div>
          <div className={classes.CanvasAddButton}>Add to wish list</div>
        </div>
      </div>
      <div className={classes.Title}>{movie.title}</div>
      <div className={classes.Details}>
        <div className={classes.Genre}>
          Release: {dateString}
          <br />
          {movie.genre}
        </div>
        <div className={classes.DetailsButton}>{movie.miniDeatails}</div>
      </div>
    </div>
  );
};

export default MovieMiniCard;
