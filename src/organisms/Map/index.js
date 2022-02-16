import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import iconPin from '../../assets/Images/icon-location.svg';

import { MapStyled } from './styles';

const LeafletMap = (lng, lat) => {
  document.getElementById('mapContainer').innerHTML =
    '<div id="mapid" class="map"></div>';

  const direction = [lat, lng];
  const map = L.map('mapid').setView(direction, 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const icon = L.icon({
    iconUrl: iconPin,
    iconSize: [50, 65], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });

  L.marker(direction, { icon }).addTo(map);
};

export default function MapView() {
  const tracker = useSelector((state) => state.addressTracker.tracker.data);
  const { location = {} } = tracker;

  useEffect(() => {
    const { lng, lat } = location;
    if (lng && lat) {
      LeafletMap(lng, lat);
    }
  }, [location]);

  return <MapStyled id="mapContainer" />;
}
