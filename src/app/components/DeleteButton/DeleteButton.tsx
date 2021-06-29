import React from 'react';
import styles from './BackButton.module.css';
import { useHistory } from 'react-router-dom';
import MinusIcon from '../../assets/MinusIcon.svg';

function DeleteButton(): JSX.Element {
  const history = useHistory();

  return (
    <button className={styles.DeleteButton} onClick={() => history.goBack()}>
      <MinusIcon />
      Delete
    </button>
  );
}

export default DeleteButton;
