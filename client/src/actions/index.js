export const login = (credentials) => {
  // Server side logic will be here
  if (credentials.email === 'alon@gmail.com' && credentials.password === '123456') {
    const dummyUser = {
      email: 'alonzuman7@gmail.com',
      firstName: 'alon',
      lastName: 'zuman'
    }
    const dummyToken = 123456

    localStorage.setItem('token', dummyToken)
    return {
      type: 'LOGIN_SUCCESS',
      payload: { token: dummyToken, user: dummyUser }
    }
  } else {
    return {
      type: 'SET_ALERT',
      payload: { msg: 'Invalid credentials', color: 'red' }
    }
  }
}

export const logout = () => {
  localStorage.removeItem('token');
  return {
    type: 'LOGOUT'
  }
}

export const validateLogin = () => {
  console.log('validating login...')
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