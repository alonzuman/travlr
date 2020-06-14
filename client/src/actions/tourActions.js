import axios from 'axios';

export const fetchTour = (id) => async dispatch => {
  const res = await axios.get(`/api/v1/tours/${id}`);
  dispatch({ type: 'SET_TOUR', payload: { tour: res.data.tour, reviews: res.data.reviews } })
}