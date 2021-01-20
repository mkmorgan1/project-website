import React, { useState } from 'react';
import style from '../design/styles.module.css';
import Titles from './Titles.jsx';
import Links from './Links.jsx';
import { useSelector } from 'react-redux';
import { select1 , select2 } from './actions/index.js';


const App = () => {
  const first = useSelector(state => state.First);
  const second = useSelector(state => state.Second);
  // const dispatch = useDispatch();

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
        {/* <button onClick={() => {
          dispatch(select1());
          dispatch(select2());
          console.log(first);
          console.log(second);
        }}></button> */}
      </div>
      <Titles />
      <div className={style.divider}></div>
      {first &&
        <div className={style.videoBox}>
          <video autoPlay muted loop id='myVideo'>
            <source src='https://matthew-resume-website.s3.us-east-2.amazonaws.com/timeTravelAgent.mov' type='video/mp4'/>
            Your browser does not support HTML5 video.
          </video>
        </div>
      }
      {second &&
        <div className={style.videoBox}>
          <video autoPlay muted loop id='myVideo'>
            <source src='https://matthew-resume-website.s3.us-east-2.amazonaws.com/ratings-%26-Reviews.mov' type='video/mp4'/>
            Your browser does not support HTML5 video.
          </video>
        </div>
      }
    </div>
  )
}

export default App;