import React from 'react';
import InfoLocation from '../../template/InfoLocation';
import Map from '../../organisms/Map';
import Header from '../../organisms/Header';

import { HomeStyled } from './styles';

export default function Home() {
  return (
    <HomeStyled>
      <Header />
      <InfoLocation />
      <Map />
    </HomeStyled>
  );
}
