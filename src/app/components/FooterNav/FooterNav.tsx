import React from 'react';
import { Link } from 'react-router-dom';
import DashboardIcon from '../Icons/DashboardIcon/DashboardIcon';
import HomeIcon from '../Icons/HomeIcon/HomeIcon';
import styles from './footerNav.module.css';

function FooterNav(): JSX.Element {
  return (
    <div className={styles.footerNav}>
      <Link to="/home">
        <HomeIcon />
      </Link>
      <Link to="/dashboard">
        <DashboardIcon />
      </Link>
    </div>
  );
}

export default FooterNav;
