import React, { useEffect, Fragment } from 'react';
import axios from 'axios';
import Topbar from '../../layout/Topbar';
import './Dashboard.css';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/index';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const dispatch = useDispatch();
  const fetchUser = async () => {
    const id = 1 //TODO
    const res = await axios.get(`/api/v1/users/${id}`)
    console.log(res);
  }

  const style = { direction: 'rtl' }

  useEffect(() => { fetchUser() }, [])

  return (
    <Fragment>
      <Topbar />
      <div style={style} className='container'>
        <h1>הפרופיל שלי</h1>
        <Link to='/'>
          <button className='primary-button' onClick={() => dispatch(logout())}>התנתקות</button>
        </Link>
      </div>
    </Fragment>
  )
}
