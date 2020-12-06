import React, { Fragment } from 'react';

import NavigationTop from '../../components/NavigationTop/NavigationTop';
import TopBanner from '../../components/TopBanner/TopBanner';
import Footer from '../../components/Footer/Footer';
import Carousel from '../Carousel/Carousel';

import * as fetchPatterns from '../../utils/discoverPatterns';

const Showcase = React.memo(() => {
  return (
    <Fragment>
      <NavigationTop />
      <TopBanner />
      <Carousel title="Popular TV Shows" config={fetchPatterns.POPULAR_TV} />
      <Carousel
        title="Kids & Familiy"
        config={fetchPatterns.POPULAR_KIDS_MOVIES}
      />
      <Carousel
        title="In Theatres Now!"
        config={fetchPatterns.PRIMARY_RELEASE()}
      />
      <Carousel title="Most Popular" config={fetchPatterns.POPULAR_MOVIES} />
      <Carousel
        title="Popular Drama"
        config={fetchPatterns.POPULAR_DRAMAS(2020)}
      />
      <Footer />
    </Fragment>
  );
});

export default Showcase;
