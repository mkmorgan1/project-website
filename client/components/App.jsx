import React, { useState } from 'react';
import style from '../design/styles.module.css';
import Titles from './Titles.jsx';

const App = () => {

  const redirect = (link) => {
    if (link === 'github') {
      console.log('redirected to github');
      window.open('https://github.com/mkmorgan1','_blank');
    }
    if (link === 'linkedin') {
      console.log('redirected to linkedin');
      window.open('https://www.linkedin.com/in/mkmorgan1/','_blank');
    }
  }



  return (
    <div>
      <div className={style.headerBox}>
        <div className={style.header}>
          <h1 className={style.matthew}>Matthew Morgan</h1>
          <h3 className={style.matthewTitle}>Full-Stack Software Engineer</h3>
          <span
            className={style.link}
            onClick={() => redirect('github')}
          >
            <i className='fab fa-github-square'></i>
          </span>
          <span
            className={style.link}
            onClick={() => redirect('linkedin')}
          >
            <i className='fab fa-linkedin'></i>
          </span>
        </div>
      </div>
      <Titles />
      <div className={style.divider}></div>
      <div className={style.videoBox}>
        <video autoPlay muted loop id="myVideo">
          <source src="https://matthew-resume-website.s3.us-east-2.amazonaws.com/ratings-%26-Reviews.mov" type="video/mp4"/>
          Your browser does not support HTML5 video.
        </video>
      </div>
      <div className={style.videoBox}>
        <video autoPlay muted loop id="myVideo">
          <source src="https://matthew-resume-website.s3.us-east-2.amazonaws.com/timeTravelAgent.mov" type="video/mp4"/>
          Your browser does not support HTML5 video.
        </video>
      </div>
    </div>
  )
}

export default App;