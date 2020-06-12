import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { alertReducer } from './alertReducer';

const reducers = combineReducers({
  auth: authReducer,
  alerts: alertReducer
});

export default reducers