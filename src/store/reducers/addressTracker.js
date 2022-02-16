import actionTypes from '../actions/addressTracker/actionTypes';

const initialState = {
  tracker: {
    data: {},
    success: false,
    error: false,
  },
};

const addressTrackerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_LOCATION:
      return {
        ...state,
        tracker: initialState.tracker,
      };
    case actionTypes.FETCH_LOCATION_SUCCESS:
      return {
        ...state,
        tracker: {
          data: payload,
          success: true,
          error: false,
        },
      };
    case actionTypes.FETCH_LOCATION_FAILED:
      return {
        ...state,
        tracker: {
          data: {},
          success: false,
          error: true,
        },
      };
    default:
      return state;
  }
};

export default addressTrackerReducer;
