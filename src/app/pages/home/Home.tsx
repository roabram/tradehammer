import React, { useState } from 'react';
import CandleStickChart from '../../components/CandleStickChart/CandleStickChart';
import SearchButton from '../../components/SearchButton/SearchButton';
import SearchFunction from '../../components/SearchFunction/SearchFunction';
import styles from './Home.module.css';
import ChartLogo from '../../assets/ChartLogo.svg';

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

function Home(): JSX.Element {
  const [searchValue, setSearchValue] = useState('');
  const [stockData, setStockData] = useState<Array<number[]>>([]);

  function loadData() {
    fetch(`/api/singleStock?stock=${searchValue}`)
      .then((response) => response.json())
      .then((data: StockData) => {
        console.log(data);
        const transformed = data.historical.map((stock) => {
          const date = new Date(stock.date);
          console.log(date);
          const timeStamp = date.getTime();

          return [timeStamp, stock.open, stock.high, stock.low, stock.close];
        });

        const firstThirtyDays = transformed.filter(
          (_stock, index) => index < 29
        );

        setStockData(firstThirtyDays);
      });
  }

  return (
    <div className={styles.container}>
      <section className={styles.heading}>
        <h1 className={styles.title}>tradeHammer</h1>
        <div className={styles.logo}>
          <img src={ChartLogo} alt="tradehammer.de Logo" />
        </div>
      </section>
      <section className={styles.searchContainer}>
        <div className={styles.searchFunction}>
          <SearchFunction
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className={styles.enterButton}>
          <SearchButton onClick={() => loadData()}>Enter</SearchButton>
        </div>
      </section>
      <div className={styles.Chart}>
        {stockData && <CandleStickChart stockData={stockData} />}
      </div>
    </div>
  );
}

export default Home;
