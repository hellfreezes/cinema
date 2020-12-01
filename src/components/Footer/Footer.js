import React from 'react';
import classes from './Footer.module.css';

import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

import Logo from '../Logo/Logo';

const MENU = [
  [
    {
      id: 0,
      title: 'Company',
      url: '',
    },
    { id: 1, title: 'About Us', url: '' },
    { id: 2, title: 'Careers', url: '' },
    { id: 3, title: 'Contact', url: '' },
  ],
  [
    {
      id: 0,
      title: 'Support',
      url: '',
    },
    { id: 1, title: 'Contact Support', url: '' },
    { id: 2, title: 'Help Center', url: '' },
    { id: 3, title: 'Supported Devices', url: '' },
    { id: 4, title: 'Activate Your Device', url: '' },
  ],
  [
    {
      id: 0,
      title: 'Partners',
      url: '',
    },
    { id: 1, title: 'Partner with Us', url: '' },
    { id: 2, title: 'Advertise with Us', url: '' },
  ],
  [
    {
      id: 0,
      title: 'Get the apps',
      url: '',
    },
    { id: 1, title: 'iOS', url: '' },
    { id: 2, title: 'Android', url: '' },
    { id: 3, title: 'Roku', url: '' },
    { id: 4, title: 'Amazon Fire', url: '' },
  ],
  [
    {
      id: 0,
      title: 'Press',
      url: '',
    },
    { id: 1, title: 'Press Releases', url: '' },
    { id: 2, title: 'Cinema in the News', url: '' },
  ],
  [
    {
      id: 0,
      title: 'Legal',
      url: '',
    },
    { id: 1, title: 'Privacy Policy (Updated)', url: '' },
    { id: 2, title: 'Terms of Use (Updated)', url: '' },
    { id: 3, title: 'Do Not Sell My Personal Information', url: '' },
  ],
];

export default function Footer() {
  const bottomNavigation = MENU.map((menuColumn, index) => {
    return (
      <div key={index} className={classes.Column}>
        <ul className={classes.Menu}>
          {menuColumn.map((menuItem) => (
            <li key={menuItem.id}>{menuItem.title}</li>
          ))}
        </ul>
      </div>
    );
  });

  return (
    <div className={classes.Footer}>
      <div className={classes.TitleRow}>
        <div>
          <Logo />
        </div>
        <div className={classes.Icons}>
          <div className={classes.Icon}>
            <YouTubeIcon />
          </div>
          <div className={classes.Icon}>
            <TwitterIcon />
          </div>
          <div className={classes.Icon}>
            <InstagramIcon />
          </div>
          <div className={classes.Icon}>
            <FacebookIcon />
          </div>
        </div>
      </div>
      <div className={classes.Row}>{bottomNavigation}</div>
    </div>
  );
}
