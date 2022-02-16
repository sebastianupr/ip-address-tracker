import { combineReducers } from 'redux';

import commons from './commons';
import addressTracker from './addressTracker';

const rootReducer = combineReducers({
  commons,
  addressTracker,
});

export default rootReducer;
