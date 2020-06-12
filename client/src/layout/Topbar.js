import './Topbar.css';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function Topbar(props) {
  let history = useHistory();
  const left = '' || props.left
  const center = 'Logo' || props.center
  const right = '' || props.right

  return (
    <div className='topbar-container'>
      <ul className='topbar-menu'>
        <li className='topbar-side'>
          {left === 'back' ?
            <button id='back-button' className='icon' onClick={() => history.goBack()}><i className="fas fa-chevron-left"></i></button> :
            <div>{left}</div>}
        </li>
        <li className='topbar-center'>
          <Link to='/'>{center}</Link>
        </li>
        <li className='topbar-side'>
          <Link to='/'>{right}</Link>
        </li>
      </ul>
    </div>
  )
}
