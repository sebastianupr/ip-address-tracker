import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector, useDispatch } from 'react-redux';

import ArrowRight from 'atoms/icons/ArrowRight';

import useQuery from 'hooks/useQuery';

import { searchAddressSchema } from 'schemas/searchAddressSchema';
import { fetchLocation } from 'store/actions/addressTracker/actions';

import { Form, Search, Input, SearchButton, ErrorMessage } from './styles';

export default function SearchComponent() {
  const tracker = useSelector((state) => state.addressTracker.tracker.data);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(searchAddressSchema),
  });

  const history = useHistory();
  const searchQuery = useQuery().get('search_query');

  const searchAddress = (values) => {
    history.push(`?search_query=${values.address}`);
  };

  useEffect(() => {
    if (isSubmitSuccessful && searchQuery) {
      dispatch(fetchLocation(searchQuery));
    }
  }, [searchQuery, isSubmitSuccessful, dispatch]);

  useEffect(() => {
    dispatch(fetchLocation(searchQuery));
  }, [dispatch]);

  return (
    tracker && (
      <Form onSubmit={handleSubmit(searchAddress)}>
        <Search>
          <Input
            type="text"
            placeholder="Search for any IP address or domain"
            {...register('address')}
            hasError={errors.address && touchedFields.address}
          />

          <SearchButton type="submit" aria-label="Search ip or domain">
            <ArrowRight onClick={handleSubmit(searchAddress)} />
          </SearchButton>

          {errors.address && touchedFields.address && (
            <ErrorMessage>{errors.address.message}</ErrorMessage>
          )}
        </Search>
      </Form>
    )
  );
}
