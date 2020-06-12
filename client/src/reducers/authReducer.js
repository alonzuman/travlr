const initialState = {
  token: localStorage.getItem('token'),
  isAuth: false,
  user: null
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload.user,
        token: action.payload.token,
        isAuth: true
      }
    case 'LOGOUT':
      return {
        ...initialState
      }
    default: return state
  }
}