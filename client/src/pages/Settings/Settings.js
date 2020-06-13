import React, { Fragment } from 'react';
import Topbar from '../../layout/Topbar';
import { changeLanguage } from '../../actions';
import { useDispatch } from 'react-redux';

export default function Settings() {
  const style = { direction: 'rtl' }
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Topbar />
      <div style={style} className='container'>
        <h1>הגדרות</h1>
        <button onClick={() => dispatch(changeLanguage('heb'))}>החלף שפה</button>
        <button onClick={() => dispatch(changeLanguage('en'))}>Switch to English</button>
      </div>
    </Fragment>
  )
}
