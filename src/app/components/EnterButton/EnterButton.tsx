import React from 'react';
import styles from './enterButton.module.css';

function EnterButton(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
): JSX.Element {
  return <button className={styles.EnterButton} {...props} />;
}

export default EnterButton;
