import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import LeafletMap from './leaflet';
import { MapStyled } from './styles';

export default function MapView() {
  const tracker = useSelector((state) => state.addressTracker.tracker.data);
  const { location = {} } = tracker;

  const mapRef = useRef();

  useEffect(() => {
    const { lng, lat } = location;
    if (mapRef.current && lng && lat) {
      LeafletMap(mapRef, lng, lat);
    }
  }, [location]);

  return (
    <MapStyled>
      <div ref={mapRef} />
    </MapStyled>
  );
}
