import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconPin from 'assets/Images/icon-location.svg';
import { MAP_ID, titleLayerConfig } from './config';

const LeafletMap = (mapRef, lng, lat) => {
  const direction = [lat, lng];

  mapRef.current.innerHTML = `<div id="${MAP_ID}"></div>`;

  const map = L.map(MAP_ID).setView(direction, 13);

  L.tileLayer(titleLayerConfig.IMG_URL, titleLayerConfig.OPTIONS).addTo(map);

  const icon = L.icon({
    iconUrl: iconPin,
    iconSize: [50, 65],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76],
  });

  L.marker(direction, { icon }).addTo(map);
};

export default LeafletMap;
