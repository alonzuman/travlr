import axios from 'axios';

export const fetchTour = (id) => async dispatch => {
  dispatch({ type: 'GET_TOUR' });
  const res = await axios.get(`/api/v1/tours/${id}`);
  if (res.data) {
    dispatch({ type: 'SET_TOUR', payload: { tour: res.data.tour, reviews: res.data.reviews } })
  } else {
    dispatch({ type: 'GET_TOUR_ERROR' });
  }
}