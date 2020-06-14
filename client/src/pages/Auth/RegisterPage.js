import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function RegisterPage() {
  const locale = useSelector(state => state.locale);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const user = {
    firstName, lastName, email, password1
  }

  const style = { direction: locale.direction }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`submitting ${user}`)
  }

  return (
    <div style={style} className='container form-container'>
      <h2>{locale.translation.register}</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input value={firstName} required placeholder={locale.translation.firstName} type='text' onChange={e => setFirstName(e.target.value)} />
        </div>
        <div className='form-group'>
          <input value={lastName} required placeholder={locale.translation.lastName} type='text' onChange={e => setLastName(e.target.value)} />
        </div>
        <div className='form-group'>
          <input value={email} required placeholder={locale.translation.emailAddress} type='email' onChange={e => setEmail(e.target.value)} />
        </div>
        <div className='form-group'>
          <input value={password1} required placeholder={locale.translation.password} type='password' onChange={e => setPassword1(e.target.value)} />
        </div>
        <div className='form-group'>
          <input value={password2} required placeholder={locale.translation.verifyPassword} type='password' onChange={e => setPassword2(e.target.value)} />
        </div>
        <div className='form-group'>
          <button type='submit' className='primary-button'>{locale.translation.register}</button>
        </div>
      </form>
      {locale.translation.alreadyRegistered}<Link className='text-button' to='/login'>{locale.translation.login}</Link>
    </div>
  )
}
