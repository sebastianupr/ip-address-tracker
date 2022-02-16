import actionTypes from '../actions/commons/actionTypes';

const initialState = {
  loader: false,
};

const commonsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SHOW_LOADER:
      return {
        ...state,
        loader: true,
      };
    case actionTypes.HIDE_LOADER:
      return {
        ...state,
        loader: false,
      };
    default:
      return state;
  }
};

export default commonsReducer;
