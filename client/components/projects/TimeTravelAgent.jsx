import React from 'react';
import style from '../../design/styles.module.css';
import { clicked } from '../../functions.js';

const TimeTravelAgent = () => {
  return (
    <div className={style.videoAndDescription}>
      <div className={style.description}>
        <p align='center'>
          {/* Github */}
          <a className={style.link} onClick={() => clicked('phaserGithub')} href='https://github.com/mkmorgan1/time-travel-agent' target='blank'>
            <i className='fab fa-github-square'></i>
          </a>
          {/* Deployed Link */}
          <a className={style.link} onClick={() => clicked('phaserDeployed')}  href='http://18.188.55.38:8000/' target='blank'>
            <i className='fas fa-gamepad'></i>
          </a>
        </p>
        <div className={style.descriptionDivider}></div>
        <h2 className={style.descriptionHeader}>Time Travel Agent</h2>
        <p>User is a time traveler who shoots portals between the past and future to avoid obstacles.</p>
        <ul>
          <li>
            Utilized <b>​Webpack</b> ​to bundle all ​<b>Phaser 3</b> ​and ​<b>React</b>​ elements and an ​<b>Express​</b> server to render the game as a single page application
          </li>
          <li>
            Applied ​<b>JavaScript Class Inheritance​</b> to create multiple levels with <b>reusable code</b>
          </li>
          <li>
            Includes a <b>tutorial scene</b> and a <b>credits scene</b> created with the user experience in mind
          </li>
          <li>
            Created all the <b>art</b> and <b>animations</b>
          </li>
        </ul>
        <div className={style.videoBox}>
          <video autoPlay muted loop id='myVideo'>
            <source
              src='https://matthew-resume-website.s3.us-east-2.amazonaws.com/timeTravelAgent.mov'
              // https://matthew-resume-website.s3.us-east-2.amazonaws.com/timeTravel.webm
              type='video/mp4'/>
            Your browser does not support HTML5 video.
          </video>
        </div>
      </div>
    </div>
  );
}

export default TimeTravelAgent;