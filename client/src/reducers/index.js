import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { alertReducer } from './alertReducer';
import { popupReducer } from './popupReducer';
import { bookingReducer } from './bookingReducer';
import { languagesReducer } from './languagesReducer';

const reducers = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  popup: popupReducer,
  booking: bookingReducer,
  locale: languagesReducer
});

export default reducers