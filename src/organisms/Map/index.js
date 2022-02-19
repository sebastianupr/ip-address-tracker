import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'leaflet/dist/leaflet.css';
import LeafletMap from './leaflet';
import { MapStyled } from './styles';
import { MAP_ID } from './config';

export default function MapView() {
  const tracker = useSelector((state) => state.addressTracker.tracker.data);
  const { location = {} } = tracker;

  useEffect(() => {
    const { lng, lat } = location;
    if (lng && lat) LeafletMap(lng, lat);
  }, [location]);

  return (
    <MapStyled>
      <div id={MAP_ID} />
    </MapStyled>
  );
}
