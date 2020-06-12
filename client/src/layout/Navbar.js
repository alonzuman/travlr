import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar-container'>
      <ul className='navbar-menu'>
        <NavLink activeClassName='selected' exact to='/'>
          <li className='icon'>
            <i className="fas fa-search"></i>
          </li>
        </NavLink>
        <NavLink activeClassName='selected' to='/dashboard'>
          <li className='icon'>
            <i className="fas fa-user-circle"></i>
          </li>
        </NavLink>
        <NavLink activeClassName='selected' to='/settings'>
          <li className='icon'>
            <i className="fas fa-cog"></i>
          </li>
        </NavLink>
      </ul>
    </div>
  )
}
