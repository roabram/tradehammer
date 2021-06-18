import React from 'react';
import styles from './SearchButton.module.css';

function SearchButton(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
): JSX.Element {
  return (
    <button
      className={styles.SearchButton}
      {...props}
      placeholder={'Search...'}
    />
  );
}

export default SearchButton;
