import React from 'react';
import classes from './MovieMiniCard.module.css';

const MovieMiniCard = ({ movie }) => {
  return (
    <div className={classes.Card}>
      <div className={classes.Canvas} style={{ backgroundImage: `url(${movie.image})` }}>
        <div className={classes.Backdrop}></div>
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
