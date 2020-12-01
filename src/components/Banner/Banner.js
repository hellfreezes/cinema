import React from 'react';
import classes from './Banner.module.css';

const Banner = React.forwardRef(({ visible, image }, ref) => {
  const classList = [classes.Banner];
  visible && classList.push(classes.Visible);
  return (
    <div
      ref={ref}
      className={classList.join(' ')}
      style={{ backgroundImage: `url(${image})` }}></div>
  );
});

export default Banner;
