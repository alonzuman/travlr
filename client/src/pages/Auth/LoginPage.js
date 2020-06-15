import React from 'react';
import { useSelector } from 'react-redux';
import Login from '../../components/Forms/Auth/Login/Login'

export default function LoginPage() {
  const locale = useSelector(state => state.locale);
  const style = { direction: locale.direction }

  return (
    <div style={style} className='container'>
      <Login />
    </div>
  )
}
