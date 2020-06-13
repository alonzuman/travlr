export const setAlert = ({ msg, color }) => dispatch => {
  dispatch({ type: 'SET_ALERT', payload: { msg, color } });
  setTimeout(() => dispatch(clearAlert()), 3000)
}

export const clearAlert = () => {
  return {
    type: 'CLEAR_ALERT'
  }
}