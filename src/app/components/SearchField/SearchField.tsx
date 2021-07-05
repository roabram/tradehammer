import React from 'react';
import styles from './Field.module.css';

type InputProps = {
  placeholder: string;
  searchValue: string;
  setSearchValue: (value: string) => void;
};

function SearchField({
  placeholder,
  searchValue,
  setSearchValue,
}: InputProps): JSX.Element {
  return (
    <label className={styles.container}>
      <input
        className={styles.container__input}
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
    </label>
  );
}

export default SearchField;
