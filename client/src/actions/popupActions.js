export const openPopup = ({ popupType }) => dispatch => {
  dispatch({ type: 'OPEN_POPUP', payload: popupType })
}

export const closePopup = () => dispatch => {
  dispatch({ type: 'CLOSE_POPUP' })
}