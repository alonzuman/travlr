import React from 'react';
import './Alerts.css'
import { useSelector } from 'react-redux';

export default function Alerts() {
  const alert = useSelector(state => state.alert);
  console.log(alert);

  return (
    <div className='alerts-container'>
      <Alert alert={alert} />
      {/* {alerts.map(alert => <Alert alert={alert} key={alert.id} />)} */}
    </div>
  )
}


const Alert = ({ alert }) => {
  const style = {
    backgroundColor: alert.color,
  }

  return (
    <div style={style} className='alert-container'>
      {alert.msg}
    </div>
  )
}