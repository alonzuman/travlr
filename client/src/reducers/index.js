import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { alertReducer } from './alertReducer';

const reducers = combineReducers({
  auth: authReducer,
  alert: alertReducer
});

export default reducers