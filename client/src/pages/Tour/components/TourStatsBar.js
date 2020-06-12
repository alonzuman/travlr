import React from 'react';
import './TourStatsBar.css';

export default function TourStatsBar({ stats }) {
  return (
    <ul className='tour-stats-bar-container'>
      <li>
        <div className='stats-key'><b>סוג</b></div>
        <p>{stats.type}</p>
      </li>
      <li>
        <div className='stats-key'><b>קושי</b></div>
        <p>{stats.difficulty}</p>
      </li>
      <li>
        <div className='stats-key'><b>מחיר</b><i className="fas fa-coins"></i></div>
        <p>{stats.price}</p>
      </li>
      <li>
        <div className='stats-key'><b>משך</b><i className="primary fas fa-clock"></i></div>
        <p>{stats.duration} ימים</p>
      </li>
    </ul>
  )
}
