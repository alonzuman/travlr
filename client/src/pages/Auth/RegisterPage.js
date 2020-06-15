import React from 'react';
import Register from '../../components/Forms/Auth/Register/Register'
import { useSelector } from 'react-redux';

export default function RegisterPage() {
  const locale = useSelector(state => state.locale);
  const style = { direction: locale.direction }

  return (
    <div style={style} className='container'>
      <Register />
    </div>
  )
}
