import { combineReducers } from 'redux';
import authReducer from './authReducer';
import menuReducer from './menuReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
  authReducer,
  menuReducer,
  orderReducer
});

export default rootReducer;
