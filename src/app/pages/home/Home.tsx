import React, { useEffect, useState } from 'react';
import CandleStickChart from '../../components/CandleStickChart/CandleStickChart';
import SearchButton from '../../components/SearchButton/SearchButton';
import SearchFunction from '../../components/SearchFunction/SearchFunction';
import styles from './Home.module.css';
import ChartLogo from '../../assets/ChartLogo.svg';
import { postSearchResult } from '../../../utils/api';
import { StockSymbol } from '../../../types';

// [Timestamp, Open, High, Low, Close]

function Home(): JSX.Element {
  const [searchValue, setSearchValue] = useState('');
  const [showChart, setShowChart] = useState(false);

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
          <SearchButton
            onClick={() => {
              postSearchResult(searchValue);
              setShowChart(true);
            }}
          >
            Enter
          </SearchButton>
        </div>
      </section>
      <div className={styles.Chart}>
        {showChart && <CandleStickChart stockSymbol={searchValue} />}
      </div>
    </div>
  );
}

export default Home;
