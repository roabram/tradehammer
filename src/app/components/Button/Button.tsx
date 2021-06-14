import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  children: string;
};

function Button(ButtonProps): JSX.Element {
  return (
    <button className={styles.button} onClick={() => alert('Good Job')}>
      Hol dir den Alert
    </button>
  );
}

export default Button;
