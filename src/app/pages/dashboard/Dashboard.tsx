import React, { useEffect, useState } from 'react';
import CandleStickChart from '../../components/CandleStickChart/CandleStickChart';
import SearchButton from '../../components/SearchButton/SearchButton';
import SearchFunction from '../../components/SearchFunction/SearchFunction';
import styles from './dashboard.module.css';
import ChartLogo from '../../assets/ChartLogo.svg';
import { postSearchResult } from '../../../utils/api';
import { StockSymbol } from '../../../types';

export type Historical = {
  open: number;
  close: number;
  high: number;
  low: number;
  date: string;
};

type StockData = {
  historical: Historical[];
};

// [Timestamp, Open, High, Low, Close]

function Dashboard(): JSX.Element {
  const [savedSymbols, setSavedSymbols] = useState<StockSymbol[]>([]);

  useEffect(() => {
    fetch('/api/stocks')
      .then((response) => response.json())
      .then(setSavedSymbols);
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.heading}>
        {console.log(savedSymbols)}
        <h1 className={styles.title}>tradeHammer</h1>
        <div className={styles.logo}>
          <img src={ChartLogo} alt="tradehammer.de Logo" />
        </div>
      </section>
      <div className={styles.Chart}>
        {savedSymbols?.map((symbol) => (
          <CandleStickChart stockSymbol={symbol.symbol} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
