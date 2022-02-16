export const domainOrIpRgx =
  /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;

export const domainRgx =
  /[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;

export const isValidDomainOrIp = (value) => {
  return domainOrIpRgx.test(value);
};

export const isDomain = (value) => domainRgx.test(value);
