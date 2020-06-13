import { setAlert } from './index'

export const addTour = (tour) => dispatch => {
  dispatch({ type: 'ADD_TOUR', payload: tour })
}

export const bookTour = () => dispatch => {
  // Payment processing is here
  const paymentStatus = 'success'
  if (paymentStatus === 'success') {
    dispatch({ type: 'BOOK_TOUR' });
    dispatch({ type: 'BOOKING_SUCCESS' });
    dispatch({ type: 'CLOSE_POPUP' });
    dispatch(setAlert({ msg: 'טיול הוזמן בהצלחה', color: 'green' }));
  } else {
    dispatch({ type: 'BOOKING_FAILED' });
    dispatch({ type: 'CLOSE_POPUP' });
    dispatch(setAlert({ msg: 'הזמנה נכשלה, אנא נסו שנית', color: 'red' }));
  }
}