import React, { Fragment } from 'react';
import classes from './NavigationTop.module.css';

import Logo from '../Logo/Logo';

export default function NavigationTop() {
  return (
    <Fragment>
      <div className={classes.Navbar}>
        <div className={classes.Column}>
          <Logo />
        </div>
        <div className={classes.Column}>
          <div className={classes.InputWrapper}>
            <input type="text" placeholder="Find movies TV shows and more" />
            <i className="material-icons">&#xE8B6;</i>
          </div>
        </div>
        <div className={classes.Column}>
          <div className={classes.Subcolumn} style={{ width: '50%' }}></div>
          <div className={classes.Subcolumn} style={{ width: '50%' }}>
            <button>Register</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
