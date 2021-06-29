import React from 'react';
import styles from './InputField.module.css';

type InputProps = {
  placeholder: string;
  inputValue: string;
  type: string;
  setInputValue: (value: string) => void;
};

function InputField({
  placeholder,
  inputValue,
  setInputValue,
  type,
}: InputProps): JSX.Element {
  return (
    <label className={styles.container}>
      <input
        className={styles.container__input}
        placeholder={placeholder}
        type={type}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </label>
  );
}

export default InputField;
