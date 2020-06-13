import React from 'react'
import './BookingSection.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAlert } from '../../../actions';

export default function BookingSection({ tour }) {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleBook = () => {
    if (!auth.isAuth) {
      dispatch(setAlert({ msg: 'Please log in', color: 'red' }))
    }
  }

  return (
    <div className='booking-section-container'>
      <div className='tour-dates-intro'>
        תאריכים עתידיים
      </div>
      <Link to={`/tours/${tour.tour_id}/book`}>
        <button onClick={handleBook} className='primary-button booking-button'>להזמנת מקום</button>
      </Link>
    </div >
  )
}
