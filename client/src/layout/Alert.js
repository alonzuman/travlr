import React from 'react';
import './Alert.css'
import { useSelector } from 'react-redux';

export default function Alert() {
  const alert = useSelector(state => state.alert);
  const style = {
    backgroundColor: alert.color,
  }

  return (
    <div className='alert-container'>
      <div style={style} className='alert'>
        {alert.msg}
      </div>
    </div>
  )
}