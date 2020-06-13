import React, { useEffect, Fragment } from 'react';
import axios from 'axios';
import Topbar from '../../layout/Topbar';
import './Dashboard.css';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/index';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const dispatch = useDispatch()
  const fetchUser = async () => {
    const id = 1 //TODO
    const res = await axios.get(`/api/v1/users/${id}`)
    console.log(res)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <Fragment>
      <Topbar />
      <div className='container'>
        Dashboard
        <Link to='/'>
          <button className='primary-button' onClick={() => dispatch(logout())}>Log Out</button>
        </Link>
      </div>
    </Fragment>
  )
}
