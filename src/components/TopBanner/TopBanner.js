import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Transition } from 'react-transition-group';

import classes from './TopBanner.module.css';
import * as actions from '../../store/actions';

import Banner from '../Banner/Banner';

const TopBanner = React.memo((props) => {
  const [bannerVisibility] = useState({
    entering: true,
    entered: true,
    exiting: false,
    exited: false,
  });
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const bannersMap = useSelector((state) => state.mainBanner.bannersMap);

  const dispatch = useDispatch();
  const mainBannersFetch = useCallback(() => dispatch(actions.mainBannersFetch()), [dispatch]);

  const bannerRefs = useRef([]);

  const switchNextBanner = useCallback(() => {
    const newCurrent = currentBannerIndex + 1 > bannersMap.length - 1 ? 0 : currentBannerIndex + 1;
    setCurrentBannerIndex(newCurrent);
  }, [bannersMap.length, currentBannerIndex]);

  useEffect(() => {
    mainBannersFetch();
  }, [mainBannersFetch]);

  useEffect(() => {
    const switchInterval = setInterval(() => {
      switchNextBanner();
    }, 5000);
    return () => clearInterval(switchInterval);
  }, [switchNextBanner]);

  const bannerTransitionsMap = bannersMap.map((banner, index) => (
    <Transition
      key={banner.id}
      in={currentBannerIndex === index}
      timeout={500}
      nodeRef={bannerRefs.current[index]}
    >
      {(state) => (
        <Banner
          ref={(element) => (bannerRefs.current[index] = element)}
          visible={bannerVisibility[state]}
          image={banner.posterUrl}
        />
      )}
    </Transition>
  ));

  return (
    <div className={classes.Container}>
      <div className={classes.BannerContainer}>
        {bannerTransitionsMap}
        <div className={classes.Gradient}></div>
      </div>
      <div className={classes.MovieTitle}>
        <div className={classes.MobileButton}>
          <i className="material-icons" style={{ position: 'relative; left: 0; top: 3px' }}>
            play_arrow
          </i>
        </div>
        {bannersMap[currentBannerIndex].title}
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
});

export default TopBanner;
