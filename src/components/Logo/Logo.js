import React from 'react';
import { useHistory } from 'react-router-dom';
import classes from './Logo.module.css';

export default function Logo() {
  const history = useHistory();

  const logoClickHandler = () => {
    history.push('/');
  };

  return (
    <div className={classes.Logo} onClick={logoClickHandler}>
      película
    </div>
  );
}
