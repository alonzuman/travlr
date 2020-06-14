import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { alertReducer } from './alertReducer';
import { popupReducer } from './popupReducer';
import { bookingReducer } from './bookingReducer';
import { languagesReducer } from './languagesReducer';
import { toursReducer } from './toursReducer';
import { tourReducer } from './tourReducer';

const reducers = combineReducers({
  auth: authReducer,
  tours: toursReducer,
  tour: tourReducer,
  alert: alertReducer,
  popup: popupReducer,
  booking: bookingReducer,
  locale: languagesReducer,
});

export default reducers