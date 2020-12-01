import React from 'react';

import classes from './TopBanner.module.css';

export default function TopBanner() {
  return (
    <div className={classes.Banner}>
      <div className={classes.MovieTitle}>
        <div className={classes.MobileButton}>
          <i className="material-icons" style={{ position: 'relative; left: 0; top: 3px' }}>
            play_arrow
          </i>
        </div>
        The Mandalorian
      </div>
      <div className={classes.Carousel}>
        <div className={classes.CarouselColumn}></div>
        <div className={classes.CarouselColumn}>
          <button>
            Watch Now <span className={classes.ButtonFree}>Free</span>
          </button>
        </div>
        <div className={classes.CarouselColumn}></div>
      </div>
    </div>
  );
}
