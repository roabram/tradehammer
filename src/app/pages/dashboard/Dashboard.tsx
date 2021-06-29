import React, { useEffect, useState } from 'react';
import CandleStickChart from '../../components/CandleStickChart/CandleStickChart';
import styles from './dashboard.module.css';
import { StockSymbol } from '../../../types';

export type Historical = {
  open: number;
  close: number;
  high: number;
  low: number;
  date: string;
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
      <section className={styles.chartSection}>
        {savedSymbols?.map((symbol) => (
          <CandleStickChart stockSymbol={symbol.symbol} />
        ))}
      </section>
    </div>
  );
}

export default Dashboard;
