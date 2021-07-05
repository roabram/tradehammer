import React, { useCallback, useEffect, useState } from 'react';
import CandleStickChart from '../../components/CandleStickChart/CandleStickChart';
import styles from './Dashboard.module.css';
import { StockSymbol } from '../../../types';

export type Historical = {
  open: number;
  close: number;
  high: number;
  low: number;
  date: string;
};

function Dashboard(): JSX.Element {
  const [savedSymbols, setSavedSymbols] = useState<StockSymbol[]>([]);
  const [error, setError] = useState(false);

  const fetchStocks = useCallback(() => {
    fetch('/api/stocks')
      .then((response) => response.json())
      .then(setSavedSymbols);
  }, []);

  useEffect(() => {
    fetchStocks();
  }, [fetchStocks]);

  return (
    <div className={styles.container}>
      <section className={styles.chartSection}>
        {savedSymbols?.map((symbol) => (
          <CandleStickChart
            key={symbol._id}
            stockSymbol={symbol}
            showChart={true}
            error={error}
            setError={setError}
            withDelete={true}
            fetchStocks={fetchStocks}
          />
        ))}
      </section>
    </div>
  );
}

export default Dashboard;
