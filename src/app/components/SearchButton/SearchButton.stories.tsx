import React from 'react';
import SearchButton from './SearchButton';

export default {
  title: 'Component/SearchButton',
  component: SearchButton,
};

export const Login = (): JSX.Element => <SearchButton>Search...</SearchButton>;
export const Register = (): JSX.Element => (
  <SearchButton>Register</SearchButton>
);
