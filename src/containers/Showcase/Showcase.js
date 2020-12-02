import React, { Fragment } from 'react';

import NavigationTop from '../../components/NavigationTop/NavigationTop';
import TopBanner from '../../components/TopBanner/TopBanner';
import Footer from '../../components/Footer/Footer';
import Carousel from '../Carousel/Carousel';

export default function Showcase() {
  return (
    <Fragment>
      <NavigationTop />
      <TopBanner />
      <Carousel />
      <Footer />
    </Fragment>
  );
}
