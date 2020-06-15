import axios from 'axios';

export const fetchTours = (filters) => async dispatch => {
  // Add the filters to the get req
  dispatch({ type: 'GET_TOURS' });
  const qs = (filters ?
    `lang=${filters.lang}&location=${filters.location}&duration=${filters.duration}&price=${filters.price}&difficulty=${filters.difficulty}` :
    'top=true')
  const res = await axios.get(`/api/v1/tours?${qs}`)
  if (res.data) {
    dispatch({ type: 'SET_TOURS', payload: { count: res.data.length, tours: res.data } })
  } else {
    dispatch({ type: 'GET_TOURS_ERROR', payload: { count: res.data.length, tours: res.data } })
  }
};

export const applyFilters = (filters) => async dispatch => {
  dispatch({ type: 'GET_TOURS' });
  console.log(filters)
  const res = await axios.get('/api/v1/tours/s', { params: { filters } })
  console.log(res.data)
}