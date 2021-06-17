import React from 'react';
import styles from './SearchField.module.css';

type InputProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

function SearchField({
  placeholder,
  value,
  onChange,
}: InputProps): JSX.Element {
  return (
    <label className={styles.container}>
      <input
        className={styles.container__input}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        value={value}
      />
    </label>
  );
}

export default SearchField;
