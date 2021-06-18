import React from 'react';
import styles from './SearchField.module.css';

type InputProps = {
  placeholder: string;
  value: string;
};

function SearchField({ placeholder, value }: InputProps): JSX.Element {
  return (
    <label className={styles.container}>
      <input
        className={styles.container__input}
        placeholder={placeholder}
        value={value}
      />
    </label>
  );
}

export default SearchField;
