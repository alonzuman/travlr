import { setAlert } from './index';

export const login = (credentials) => dispatch => {
  // Server side logic will be here
  if (credentials.email === 'alon@gmail.com' && credentials.password === '123456') {
    const dummyUser = {
      email: 'alonzuman7@gmail.com',
      firstName: 'alon',
      lastName: 'zuman'
    }
    const dummyToken = 123456
    localStorage.setItem('token', dummyToken)
    dispatch({ type: 'LOGIN_SUCCESS', payload: { token: dummyToken, user: dummyUser } })
    dispatch({ type: 'CLOSE_POPUP' })
    dispatch(setAlert({ msg: 'ברוכים הבאים', color: 'green' }))
  } else {
    dispatch(setAlert({ msg: 'פרטי התחברות שגויים, אנא נסו שנית', color: 'red' }))
  }
}

export const logout = () => dispatch => {
  dispatch({ type: 'LOGOUT_REQUEST' })
  const token = localStorage.removeItem('token');
  console.log(token)
  if (!token) {
    dispatch({ type: 'LOGOUT_SUCCESS' });
    dispatch(setAlert({ msg: 'התנתקת בהצלחה', color: 'green' }));
  } else {
    dispatch({ type: 'LOGOUT_ERROR' });
    dispatch(setAlert({ msg: 'שגיאה בעת ההתנתקות, אנא נסו שנית', color: 'red' }));
  }
}

export const validateLogin = () => {
  const token = localStorage.getItem('token');
  // Send to backend and validate
  if (token) {
    const dummyUser = {
      email: 'alonzuman7@gmail.com',
      firstName: 'alon',
      lastName: 'zuman'
    }
    return {
      type: 'LOGIN_SUCCESS',
      payload: { token, user: dummyUser }
    }
  } else {
    return {
      type: 'LOGOUT'
    }
  }
}