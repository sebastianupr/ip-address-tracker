import { API_URL, API_KEY } from './config.js';

export default function getLocationByDomain(domain) {
  return fetch(`${API_URL}?apiKey=${API_KEY}&domain=${domain}`)
    .then((data) => data.json())
    .then((infoLocation) => infoLocation)
    .catch((err) => err);
}
