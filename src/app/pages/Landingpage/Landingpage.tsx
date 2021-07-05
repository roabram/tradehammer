import React from 'react';
import { Link } from 'react-router-dom';
import TradeInIcon from '../../components/Icons/TradeInIcon/TradeInIcon';
import styles from './Landingpage.module.css';
import ChartLogo from '../../assets/ChartLogo.svg';

// [Timestamp, Open, High, Low, Close]

function Landingpage(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={ChartLogo} alt="tradehammer.de Logo" />
      </div>
      <Link to="/home">
        <TradeInIcon />
      </Link>
    </div>
  );
}

export default Landingpage;
