import React, { useState } from 'react';
import SearchButton from '../SearchButton/SearchButton';
import SearchField from '../SearchField/SearchField';
import styles from './SearchFunction.module.css';

function SearchFunction(): JSX.Element {
  const [isSearchMode, setIsSearchMode] = useState(true);

  return (
    <div className={styles.container}>
      {isSearchMode ? (
        <SearchButton onClick={() => setIsSearchMode(!isSearchMode)}>
          Search....
        </SearchButton>
      ) : (
        <SearchField placeholder={'Search....'} value={''} />
      )}
    </div>
  );
}

export default SearchFunction;
