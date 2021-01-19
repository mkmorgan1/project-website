import React, { useState } from 'react';
import style from '../design/styles.module.css';
import Titles from './Titles.jsx';
import Links from './Links.jsx';

const App = () => {

  return (
    <div>
      <div className={style.headerBox}>
        <div className={style.header}>
          <h1 className={style.matthew}>Matthew Morgan</h1>
          <h3 className={style.matthewTitle}>Full-Stack Software Engineer</h3>
          <Links />
        </div>
      </div>
      <Titles />
      <div className={style.divider}></div>
      <div className={style.videoBox}>
        <video autoPlay muted loop id='myVideo'>
          <source src='https://matthew-resume-website.s3.us-east-2.amazonaws.com/ratings-%26-Reviews.mov' type='video/mp4'/>
          Your browser does not support HTML5 video.
        </video>
      </div>
      <div className={style.videoBox}>
        <video autoPlay muted loop id='myVideo'>
          <source src='https://matthew-resume-website.s3.us-east-2.amazonaws.com/timeTravelAgent.mov' type='video/mp4'/>
          Your browser does not support HTML5 video.
        </video>
      </div>
    </div>
  )
}

export default App;