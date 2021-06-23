import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchButton from '../../components/SearchButton/SearchButton';
import InputField from '../../components/InputField/InputField';
import styles from './Login.module.css';

function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <header className={styles.header}>
        <div className={styles.logo}></div>
        <span className={styles.title}>tradeHammer</span>
      </header>

      <main className={styles.main}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.form__labeledInput}>
            <InputField
              placeholder="Mail"
              type="email"
              inputValue={email}
              setInputValue={setEmail}
            />
            <InputField
              placeholder="password"
              type="password"
              inputValue={password}
              setInputValue={setPassword}
            />
          </div>
          <Link to="/forgotPassword" className={styles.form__link}>
            Forgot password?
          </Link>
          <SearchButton>Log in</SearchButton>
          <Link to="/register" className={styles.form__link}>
            <span className={styles.form__linkSpan}>Not a member?</span> Sign up
          </Link>
        </form>
      </main>

      <footer className={styles.footerElement}></footer>
    </div>
  );
}

export default Login;
