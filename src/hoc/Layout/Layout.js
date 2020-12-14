import React, { Fragment } from 'react';

import NavigationTop from '../../components/NavigationTop/NavigationTop';
import Footer from '../../components/Footer/Footer';
import classes from './Layout.module.css';

export default function Layout(props) {
  return (
    <Fragment>
      <NavigationTop />
      <div className={classes.content}>{props.children}</div>
      <Footer />
    </Fragment>
  );
}
