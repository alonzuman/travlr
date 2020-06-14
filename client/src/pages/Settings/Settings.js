import React, { Fragment } from 'react';
import Topbar from '../../layout/Topbar';
import { changeLanguage } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';

export default function Settings() {
  const locale = useSelector(state => state.locale);
  const style = { direction: locale.direction };
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Topbar />
      <div style={style} className='container'>
        <h1>{locale.translation.settings}</h1>
        <div className='form-group'>
          <button onClick={() => dispatch(changeLanguage('heb'))}>החלף לעברית</button>
        </div>
        <div className='form-group'>

          <button onClick={() => dispatch(changeLanguage('en'))}>Switch to English</button>
        </div>
      </div>
    </Fragment>
  )
}
