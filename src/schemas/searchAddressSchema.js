import * as yup from 'yup';
import { isValidDomainOrIp } from './validations/ipAndDomainValidation';

export const searchAddressSchema = yup
  .object({
    address: yup
      .string()
      .required('IP Address is required')
      .test('is-valid-domain-or-ip', 'Invalid IP or Domain', (value) => {
        return isValidDomainOrIp(value);
      }),
  })
  .required();
