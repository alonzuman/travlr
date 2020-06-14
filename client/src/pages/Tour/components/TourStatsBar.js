import React from 'react';
import './TourStatsBar.css';
import { useSelector } from 'react-redux'

export default function TourStatsBar({ stats }) {
  const locale = useSelector(state => state.locale);

  return (
    <ul className='tour-stats-bar-container'>
      <li>
        <div className='stats-key'><b>{locale.translation.type}</b></div>
        <p>{stats.type}</p>
      </li>
      <li>
        <div className='stats-key'><b>{locale.translation.difficulty}</b></div>
        <p>{stats.difficulty}</p>
      </li>
      <li>
        <div className='stats-key'><b>{locale.translation.price}</b><i className="fas fa-coins"></i></div>
        <p>{stats.price}</p>
      </li>
      <li>
        <div className='stats-key'><b>{locale.translation.duration}</b><i className="primary fas fa-clock"></i></div>
        <p>{stats.duration} {locale.translation.days}</p>
      </li>
    </ul>
  )
}
