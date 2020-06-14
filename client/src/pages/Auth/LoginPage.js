import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = { email, password };
  const locale = useSelector(state => state.locale);

  const style = { direction: locale.direction }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(user));
  }

  return (
    <div style={style} className='container form-container'>
      <form onSubmit={handleSubmit}>
        <h2>{locale.translation.login}</h2>
        <div className='form-group'>
          <input required placeholder={locale.translation.emailAddress} type='email' value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className='form-group'>
          <input required placeholder='******' type='password' value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div className='form-group'>
          <button type='submit' className='primary-button'>{locale.translation.login}</button>
        </div>
      </form>
      <div className='form-group'>
        <button className='fb-button'>{locale.translation.loginFacebook}<i className="fab fa-facebook"></i></button>
      </div>
      {locale.translation.notRegistered}<Link className='text-button' to='/register' >{locale.translation.signUpNow}</Link>
    </div>
  )
}
