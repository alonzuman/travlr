import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../actions';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = { email, password }

  const style = {
    direction: 'rtl'
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(user));
  }

  return (
    <div style={style} className='container'>
      <form onSubmit={handleSubmit}>
        <h2>התחברות</h2>
        <div className='form-group'>
          <input required placeholder='כתובת דוא״ל' type='email' value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className='form-group'>
          <input required placeholder='******' type='password' value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div className='form-group'>
          <button type='submit' className='primary-button'>התחברות</button>
        </div>
      </form>
      <div className='form-group'>
        <button className='fb-button'>התחברות באמצעות<i className="fab fa-facebook"></i></button>
      </div>
      לא רשום? <Link className='text-button' to='/register'>הרשמ/י עכשיו!</Link>
    </div>
  )
}
