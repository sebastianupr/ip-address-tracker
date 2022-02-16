import qs from 'qs';

import { isDomain } from '../schemas/validations/ipAndDomainValidation';

import { API_URL, API_KEY } from './config';

export default function getLocation(ipAddress) {
  const queryPayload = { apiKey: API_KEY };

  if (!isDomain(ipAddress)) {
    queryPayload.ipAddress = ipAddress;
  }
  if (isDomain(ipAddress)) {
    queryPayload.domain = ipAddress;
  }

  const query = qs.stringify(queryPayload, { encode: false });

  return fetch(`${API_URL}?${query}`).then((data) => data.json());
}
