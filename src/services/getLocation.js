import qs from 'qs';

import { isDomain } from 'schemas/validations/ipAndDomainValidation';

import { API_URL, API_KEY } from './config';

export default function getLocation(query) {
  const queryPayload = { apiKey: API_KEY };

  if (!isDomain(query)) {
    queryPayload.ipAddress = query;
  }

  if (isDomain(query)) {
    queryPayload.domain = query;
  }

  const queryParams = qs.stringify(queryPayload, { encode: false });
  return fetch(`${API_URL}?${queryParams}`).then((data) => data.json());
}
