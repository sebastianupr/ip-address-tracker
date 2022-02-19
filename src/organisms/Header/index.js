import React from 'react';
import Search from 'molecules/Search';
import { Header, Title, Link } from './styles';

export default function HeaderComponent() {
  return (
    <Header>
      <Title>
        <Link to="/">
          <h3>IP Address Tracker</h3>
        </Link>
      </Title>
      <Search />
    </Header>
  );
}
