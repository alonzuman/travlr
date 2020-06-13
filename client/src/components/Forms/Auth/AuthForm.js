import React, { useState } from 'react';
import Login from './Login/Login';
import Register from './Register/Register';

export default function AuthForm() {
  const [isLogIn, setIsLogIn] = useState(true);
  return (
    <div className='form-container'>
      {isLogIn && <Login setIsLogIn={setIsLogIn} />}
      {!isLogIn && <Register setIsLogIn={setIsLogIn} />}
    </div>
  )
}
