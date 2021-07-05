import React from 'react';
import styles from './Heading.module.css';
import ChartLogo from '../../assets/ChartLogo.svg';

function Heading(): JSX.Element {
  return (
    <>
      <section className={styles.heading}>
        <h1 className={styles.title}>tradeHammer</h1>
        <div className={styles.logo}>
          <img src={ChartLogo} alt="tradehammer.de Logo" />
        </div>
      </section>
    </>
  );
}

export default Heading;
