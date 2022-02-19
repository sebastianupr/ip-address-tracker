import React from 'react';
import { useSelector } from 'react-redux';

import { InfoLocation, InfoLocationSection } from './styles';

export default function InfoLocationView() {
  const tracker = useSelector((state) => state.addressTracker.tracker.data);
  const { ip = '', location = {}, isp = '' } = tracker;
  const {
    city = '',
    region = '',
    postalCode = '',
    country = '',
    timezone = '',
  } = location;

  return (
    <section>
      <InfoLocation>
        <InfoLocationSection>
          <h6>IP ADDRESS</h6>
          <h4>{ip}</h4>
        </InfoLocationSection>
        <InfoLocationSection border borderRight>
          <h6>LOCATION</h6>
          <h4>{`${
            postalCode ? `${postalCode},` : ''
          } ${city}, ${region} - ${country}`}</h4>
        </InfoLocationSection>
        <InfoLocationSection border>
          <h6>TIMEZONE</h6>
          <h4>{timezone}</h4>
        </InfoLocationSection>
        <InfoLocationSection>
          <h6>ISP</h6>
          <h4>{isp}</h4>
        </InfoLocationSection>
      </InfoLocation>
    </section>
  );
}
