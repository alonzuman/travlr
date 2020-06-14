import axios from 'axios';

export const fetchTours = () => async dispatch => {
  // Add the filters to the get req
  const res = await axios.get(`/api/v1/tours`)
  dispatch({ type: 'SET_TOURS', payload: { count: res.data.length, tours: res.data } })
};