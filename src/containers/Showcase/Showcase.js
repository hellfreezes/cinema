import React, { Fragment, useEffect } from 'react';

import TopBanner from '../../components/TopBanner/TopBanner';
import Carousel from '../Carousel/Carousel';

import * as fetchPatterns from '../../utils/discoverPatterns';

const Showcase = React.memo(() => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Fragment>
      <TopBanner />
      <Carousel title="Popular TV Shows" config={fetchPatterns.POPULAR_TV} />
      <Carousel
        title="Kids & Familiy"
        config={fetchPatterns.POPULAR_KIDS_MOVIES}
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
