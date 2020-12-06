import React, { Fragment, useState } from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';

import classes from './NavigationTop.module.css';

import Logo from '../Logo/Logo';

export default function NavigationTop() {
  const [mainStyle, setMainStyle] = useState([classes.Navbar]);

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y >= -80) {
      setMainStyle([classes.Navbar]);
    } else if (currPos.y < prevPos.y) {
      setMainStyle([classes.Navbar, classes.Hide]);
    } else {
      setMainStyle([classes.Navbar]);
    }
  });

  return (
    <Fragment>
      <div className={mainStyle.join(' ')}>
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
          <div className={classes.Subcolumn}>
            <button>Register</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
