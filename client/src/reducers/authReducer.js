const initialState = {
  token: localStorage.getItem('token'),
  isAuth: false,
  authInfo: null,
  isLoading: false,
  loginError: null,
  logoutError: null,
  signupError: null
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
    case 'REGISTER_REQUEST':
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        isLoading: true
      }
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      return {
        authInfo: action.payload.authInfo,
        token: action.payload.token,
        isAuth: true,
        isLoading: false
      }
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        token: null,
        isAuth: false,
        isLoading: false
      }
    case 'LOGIN_ERROR':
    case 'REGISTER_ERROR':
    case 'LOGOUT_ERROR':
      return {
        ...initialState,

      }
    default: return state
  }
}