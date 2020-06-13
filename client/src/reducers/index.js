import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { alertReducer } from './alertReducer';
import { popupReducer } from './popupReducer';

const reducers = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  popup: popupReducer
});

export default reducers