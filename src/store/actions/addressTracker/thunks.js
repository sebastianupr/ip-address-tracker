import {
  syncFetchLocation,
  fetchLocationSuccess,
  fetchLocationFailed,
} from './actions';
import { showLoader, hideLoader } from '../commons/actions';
import getLocation from './../../../services/getLocation';

export const fetchLocationThunk = (searchQuery) => async (dispatch) => {
  try {
    dispatch(showLoader());
    dispatch(syncFetchLocation(searchQuery));
    const location = await getLocation(searchQuery);

    if (location.code) {
      throw new Error(location.message);
    }

    dispatch(fetchLocationSuccess(location));
  } catch (err) {
    console.error(err);
    dispatch(fetchLocationFailed(err));
  } finally {
    dispatch(hideLoader());
  }
};
