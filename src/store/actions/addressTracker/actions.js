import actionTypes from './actionTypes';
import { fetchLocationThunk } from './thunks';

export const syncFetchLocation = (payload) => ({
  type: actionTypes.FETCH_LOCATION,
  payload,
});

export const fetchLocation = fetchLocationThunk;

export const fetchLocationSuccess = (payload) => ({
  type: actionTypes.FETCH_LOCATION_SUCCESS,
  payload,
});

export const fetchLocationFailed = (payload) => ({
  type: actionTypes.FETCH_LOCATION_FAILED,
  payload,
});
