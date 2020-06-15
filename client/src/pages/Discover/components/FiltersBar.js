import React, { useState } from 'react';
import { fetchTours } from '../../../actions';
import { useSelector, useDispatch } from 'react-redux'
import './FiltersBar.css';

export default function FiltersBar() {
  const [filters, setFilters] = useState({
    lang: '',
    location: '',
    duration: '',
    price: '',
    difficulty: '',
    type: ''
  })
  const locale = useSelector(state => state.locale)
  const dispatch = useDispatch();
  return (
    <div className='filters-bar-container' style={{ direction: locale.direction }}>
      <ul className='filters-grid'>
        <li><button onClick={() => setFilters({ ...filters, location: 'center' })}>{locale.translation.location}</button></li>
        <li>{locale.translation.type}</li>
        <li>{locale.translation.difficulty}</li>
        <li><button onClick={() => setFilters({ ...filters, lang: ['en', 'heb'] })}>{locale.translation.language}</button></li>
        <li>{locale.translation.duration}</li>
        <li>{locale.translation.price}</li>
      </ul>
      <button className='primary-button' onClick={() => dispatch(fetchTours(filters))}>{locale.translation.apply}</button>
    </div>
  )
}
