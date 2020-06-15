import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const locale = useSelector(state => state.locale)
  const user = {
    firstName, lastName, email, password1
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`submitting ${user}`)
  }

  return (
    <div style={{ direction: locale.direction }}>
      <form onSubmit={handleSubmit}>
        <h2>{locale.translation.register}</h2>
        <div className='form-group'>
          <input value={firstName} required placeholder='שם פרטי' type='text' onChange={e => setFirstName(e.target.value)} />
        </div>
        <div className='form-group'>
          <input value={lastName} required placeholder='שם משפחה' type='text' onChange={e => setLastName(e.target.value)} />
        </div>
        <div className='form-group'>
          <input value={email} required placeholder='כתובת דוא״ל' type='email' onChange={e => setEmail(e.target.value)} />
        </div>
        <div className='form-group'>
          <input value={password1} required placeholder='ססמא' type='password' onChange={e => setPassword1(e.target.value)} />
        </div>
        <div className='form-group'>
          <input value={password2} required placeholder='אימות ססמא' type='password' onChange={e => setPassword2(e.target.value)} />
        </div>
        <div style={{ textAlign: 'center' }} className='form-group'>
          <button type='submit' className='primary-button'>{locale.translation.register}</button>
          {locale.translation.alreadyRegistered}<Link className='text-button' to='/login'>{locale.translation.login}</Link>
        </div>
      </form>
    </div>
  )
}
