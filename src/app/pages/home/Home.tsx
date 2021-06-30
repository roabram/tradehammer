import React, { useState } from 'react';
import CandleStickChart from '../../components/CandleStickChart/CandleStickChart';
import SearchButton from '../../components/SearchButton/SearchButton';
import SearchFunction from '../../components/SearchFunction/SearchFunction';
import styles from './Home.module.css';
// import ChartLogo from '../../assets/ChartLogo.svg';
import { postSearchResult } from '../../../utils/api';
import EnterButton from '../../components/EnterButton/EnterButton';

// [Timestamp, Open, High, Low, Close]

function Home(): JSX.Element {
  const [searchValue, setSearchValue] = useState('');
  const [showChart, setShowChart] = useState(false);

  let saveButton;
  if (showChart) {
    saveButton = <EnterButton>Save</EnterButton>;
  }

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
      <div className={styles.enterButton}>{saveButton}</div>
    </div>
  );
}

export default Home;
