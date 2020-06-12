const initialState = {
  msg: {},
  color: null,
}

export const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ALERT':
      return {
        msg: action.payload.msg,
        color: action.payload.color,
      }
    case 'CLEAR_ERRORS':
      return {
        ...initialState
      }
    default: return state
  }
}