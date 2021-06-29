import React from 'react';
import styles from './title.module.css';
import ChartLogo from '../../assets/ChartLogo.svg';

function Title(): JSX.Element {
  return (
    <div className={styles.title}>
      <h1 className={styles.titleText}>tradeHammer</h1>
      <ChartLogo />
    </div>
  );
}

export default Title;
