import React from 'react';
import Search from '../../molecules/Search';
import { Header, LinkTitle } from './styles';

export default function HeaderComponent() {
  return (
    <Header>
      <LinkTitle to="/">
        <h3>IP Address Tracker</h3>
      </LinkTitle>
      <div className="search">
        <Search />
      </div>
    </Header>
  );
}
