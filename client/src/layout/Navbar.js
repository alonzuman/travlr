import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import { useSelector } from 'react-redux';

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

export const DesktopNavbar = () => {
  const auth = useSelector(state => state.auth);
  const style = { direction: 'rtl' };

  return (
    <div style={style} className='desktop-navbar-container'>
      <ul className='desktop-navbar-menu'>
        <NavLink exact to='/' >
          <li className='desktop-nav-item'>
            <h3>Logo</h3>
          </li>
        </NavLink>
        {auth.isAuth && <div className='desktop-nav-group'>
          <NavLink exact to='/' activeClassName='desktop-active'>
            <li className='desktop-nav-item'>
              דף הבית
            </li>
          </NavLink>
          <NavLink to='/dashboard' activeClassName='desktop-active'>
            <li className='desktop-nav-item'>
              הפרופיל שלי
            </li>
          </NavLink>
          <NavLink to='/settings' activeClassName='desktop-active'>
            <li className='desktop-nav-item'>
              הגדרות
            </li>
          </NavLink>
        </div>}
        {!auth.isAuth &&
          <div className='desktop-nav-group'>
            <NavLink to='/login' activeClassName='desktop-active'>
              <li className='desktop-nav-item'>
                התחברות
              </li>
            </NavLink>
            <NavLink to='/register' activeClassName='desktop-active'>
              <li className='desktop-nav-item'>
                הרשמה
              </li>
            </NavLink>
          </div>}
      </ul>
    </div>
  )
}