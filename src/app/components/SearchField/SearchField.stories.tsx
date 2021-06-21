import React from 'react';
import SearchField from './SearchField';

export default {
  title: 'Component/SearchField',
  component: SearchField,
};

export const search = (): JSX.Element => (
  <SearchField
    searchValue=""
    setSearchValue={console.log}
    placeholder="Search.........."
  />
);
