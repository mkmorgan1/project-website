import React, { useState } from 'react';
import style from '../design/styles.module.css';
import Titles from './Titles.jsx';
import Links from './Links.jsx';
import RatingsAndReviews from './projects/RatingsAndReviews.jsx';
import TimeTravelAgent from './projects/TimeTravelAgent.jsx';
import { useSelector } from 'react-redux';
import { select1 , select2 } from './actions/index.js';


const App = () => {
  const first = useSelector(state => state.First);
  const second = useSelector(state => state.Second);

  return (
    <div>
      <div className={style.headerBox}>
        <div className={style.header}>
          <h1 className={style.matthew}>Matthew Morgan</h1>
          <h3 className={style.matthewTitle}>Full-Stack Software Engineer</h3>
          <Links />
        </div>
      </div>
      <div>
      </div>
      <Titles />
      <div className={style.divider}></div>
      {first && <TimeTravelAgent />}
      {second && <RatingsAndReviews />}
    </div>
  )
}

export default App;