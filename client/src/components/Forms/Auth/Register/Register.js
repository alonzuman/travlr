import React, { useState } from 'react';

export default function Register({ setIsLogIn }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const user = {
    firstName, lastName, email, password1
  }

  const style = {
    direction: 'rtl'
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`submitting ${user}`)
  }

  return (
    <div style={style} className='container'>
      <h2>הרשמה</h2>
      <form onSubmit={handleSubmit}>
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
        <div className='form-group'>
          <button type='submit' className='primary-button'>הרשמה</button>
        </div>
      </form>
      כבר רשומ/ה אלינו? <button onClick={() => setIsLogIn(true)} >התחבר/י עכשיו!</button>
    </div>
  )
}
