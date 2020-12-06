import React from 'react';
import classes from './MovieMiniCard.module.css';

import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';

const MovieMiniCard = ({ movie, moveLeft }) => {
  return (
    <div className={classes.Card} style={{ left: `-${moveLeft}%` }}>
      <div
        className={classes.Canvas}
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/w500${movie.image}")`,
        }}>
        <div className={classes.Backdrop}>
          <div className={classes.BackdropPlay}>
            <PlayCircleFilledWhiteOutlinedIcon style={{ font: 'inherit' }} />
          </div>
        </div>
        <div className={classes.CanvasAddButton}>Add to wish list</div>
      </div>
      <div className={classes.Title}>{movie.title}</div>
      <div className={classes.Details}>
        <div className={classes.Genre}>
          ({movie.year}) · {movie.minutes} min
          <br />
          {movie.genre}
        </div>
        <div className={classes.DetailsButton}>{movie.miniDeatails}</div>
      </div>
    </div>
  );
};

export default MovieMiniCard;
