import React, { useEffect, Fragment } from 'react';
import axios from 'axios';
import Topbar from '../../layout/Topbar';
import './Dashboard.css';

export default function Dashboard() {
  const id = 1

  const fetchUser = async () => {
    const res = await axios.get(`/users/${id}`)
    console.log(res)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const style = {
    direction: 'rtl'
  }

  return (
    <Fragment>
      <Topbar />
      <div style={style} className='container'>
        Dashboard
      </div>
    </Fragment>
  )
}
