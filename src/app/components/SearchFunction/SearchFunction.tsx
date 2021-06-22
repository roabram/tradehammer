import React, { useState } from 'react';
import SearchButton from '../SearchButton/SearchButton';
import SearchField from '../SearchField/SearchField';
import styles from './SearchFunction.module.css';

export type SearchProps = {
  searchValue: string;
  setSearchValue: (value: string) => void;
};

function SearchFunction({
  searchValue,
  setSearchValue,
}: SearchProps): JSX.Element {
  const [isSearchMode, setIsSearchMode] = useState(true);

  return (
    <div className={styles.container}>
      {isSearchMode ? (
        <SearchButton onClick={() => setIsSearchMode(!isSearchMode)}>
          Search....
        </SearchButton>
      ) : (
        <SearchField
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          placeholder={'Search....'}
        />
      )}
    </div>
  );
}

export default SearchFunction;
