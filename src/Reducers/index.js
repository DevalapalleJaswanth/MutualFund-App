import User from './User';
import mutualFund from './mutualFund';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  User,
  mutualFund,
});

export default rootReducer;
