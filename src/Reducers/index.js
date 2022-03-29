import UserReducer from './UserReducer';
import mutualFundReducer from './mutualFundReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  UserReducer,
  mutualFundReducer,
});

export default rootReducer;
