import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../actions';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = { email, password }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(user));
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h2>Please login to continue</h2>
        <div className='form-group'>
          <input placeholder='john@gmail.com' type='email' value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className='form-group'>
          <input placeholder='******' type='password' value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div className='form-group'>
          <button type='submit' className='primary-button'>Log in</button>
        </div>
      </form>
    </div>
  )
}
