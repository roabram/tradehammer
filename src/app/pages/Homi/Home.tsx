import React, { useState } from 'react';
import CandleStickChart from '../../components/CandleStickChart/CandleStickChart';
import SearchButton from '../../components/SearchButton/SearchButton';
import SearchFunction from '../../components/SearchFunction/SearchFunction';
import styles from './Home.module.css';
import { postSearchResult } from '../../../utils/api';
import EnterButton from '../../components/EnterButton/EnterButton';

// [Timestamp, Open, High, Low, Close]

function Home(): JSX.Element {
  const [searchValue, setSearchValue] = useState('');
  const [showChart, setShowChart] = useState(false);
  const [showSaveButton, setShowSaveButton] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={styles.container}>
      <section className={styles.searchContainer}>
        <div className={styles.searchFunction}>
          <SearchFunction
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div>
          <SearchButton
            onClick={() => {
              setShowChart(!showChart);
              setShowSaveButton(true);
            }}
          >
            Enter
          </SearchButton>
        </div>
      </section>
      <div className={styles.Chart}>
        {showChart && (
          <CandleStickChart
            stockSymbol={{ symbol: searchValue }}
            showChart={showChart}
            error={error}
            setError={setError}
            withDelete={false}
          />
        )}
      </div>
      <div className={styles.enterButton}>
        {showSaveButton && !error && (
          <EnterButton onClick={() => postSearchResult(searchValue)}>
            Save
          </EnterButton>
        )}
      </div>
    </div>
  );
}

export default Home;
