import React from 'react';
import './Popup.css';
import { closePopup } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../components/Forms/Auth/AuthForm';
import BookingForm from '../components/Forms/Booking/BookingForm';

export default function Popup() {
  const dispatch = useDispatch();

  return (
    <div className='popup-container'>
      <button className='icon' onClick={() => dispatch(closePopup())}><i className="fas fa-times"></i></button>
      <PopupContent />
    </div>
  )
}

const PopupContent = () => {
  const { popupType } = useSelector(state => state.popup)
  switch (popupType) {
    case 'BOOKING_POPUP':
      return (
        <BookingForm />
      )
    case 'LOGIN_POPUP':
      return (
        <AuthForm />
      )
    default: return <h1>err</h1>
  }
}