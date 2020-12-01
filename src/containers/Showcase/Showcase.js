import React, { Fragment } from 'react';

import NavigationTop from '../../components/NavigationTop/NavigationTop';
import TopBanner from '../../components/TopBanner/TopBanner';
import Footer from '../../components/Footer/Footer';

export default function Showcase() {
  return (
    <Fragment>
      <NavigationTop />
      <TopBanner />
      <Footer />
    </Fragment>
  );
}
