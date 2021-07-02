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
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/stocks')
      .then((response) => response.json())
      .then(setSavedSymbols);
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.chartSection}>
        {savedSymbols?.map((symbol) => (
          <CandleStickChart
            key={symbol._id}
            stockSymbol={symbol.symbol}
            showChart={true}
            error={error}
            setError={setError}
          />
        ))}
      </section>
    </div>
  );
}

export default Dashboard;
