import React, { useState, useRef, useEffect } from 'react';
import { Transition } from 'react-transition-group';

import classes from './TopBanner.module.css';
import MandalorianPoster from '../../assets/images/mandalorian-poster.png';
import StrangerThings from '../../assets/images/stranger_things_poster.jpg';

import Banner from '../Banner/Banner';

export default function TopBanner() {
  const [toggle, setToggle] = useState(true);
  const [bannerVisibility] = useState({
    entering: true,
    entered: true,
    exiting: false,
    exited: false,
  });

  const topBannerRef = useRef(null);

  useEffect(() => {
    setInterval(() => {
      console.log('Tik');
      // setToggle(!toggle);
    }, 5000);
  }, []);

  const watchNowButtonHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div className={classes.Container}>
      <div className={classes.BannerContainer}>
        <Transition in={toggle} timeout={500} nodeRef={topBannerRef}>
          {state => (
            <Banner
              ref={topBannerRef}
              visible={bannerVisibility[state]}
              image={MandalorianPoster}
            />
          )}
        </Transition>
        <Transition in={!toggle} timeout={500} nodeRef={topBannerRef}>
          {state => (
            <Banner
              ref={topBannerRef}
              visible={bannerVisibility[state]}
              image={StrangerThings}
            />
          )}
        </Transition>
        <div className={classes.Gradient}></div>
      </div>
      <div className={classes.MovieTitle}>
        <div className={classes.MobileButton}>
          <i
            className="material-icons"
            style={{ position: 'relative; left: 0; top: 3px' }}>
            play_arrow
          </i>
        </div>
        The Mandalorian
      </div>
      <div className={classes.Carousel}>
        <div className={classes.CarouselColumn}></div>
        <div className={classes.CarouselColumn}>
          <button onClick={watchNowButtonHandler}>
            Watch Now <span className={classes.ButtonFree}>Free</span>
          </button>
        </div>
        <div className={classes.CarouselColumn}></div>
      </div>
    </div>
  );
}
