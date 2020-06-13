import React from 'react';
import './Alert.css'
import { useSelector } from 'react-redux';

export default function Alert() {
  const alert = useSelector(state => state.alert);
  const color = () => {
    switch (alert.color) {
      case 'green':
        return '#007338e6'
      case 'red':
        return '#730000e6'
      default: return ''
    }
  }

  const style = {
    backgroundColor: color(),
  }

  return (
    <div className='alert-container'>
      <div style={style} className='alert'>
        {alert.msg}
      </div>
    </div>
  )
}