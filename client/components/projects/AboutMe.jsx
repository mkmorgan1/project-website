import React from 'react';
import style from '../../design/styles.module.css';

const AboutMe = () => {
  return (
    <div className={style.videoAndDescription}>

      <div className={style.description}>
        <h2 className={style.descriptionHeader}>Matthew Morgan</h2>
        <p>Full-Stack Software Engineer</p>
        <ul>
          <li>
            <b>Front-End:</b>​ JavaScript, React, React Hooks, Axios​, ​HTML, CSS, Phaser 3, Redux
          </li>
          <li>
            <b>Back-End:​</b> Express, MySQL, MongoDB, Mongoose, EC2, PM2, Neo4j
          </li>
          <li>
            <b>Deployment:</b> AWS, EC2, S3
          </li>
          <li>
            <b>Other:</b> ​Git-Workflow, Command Line Basics, trello
          </li>
        </ul>
        <p>Personal</p>
        <ul>
          <li>
            Driven by creativity
          </li>
          <li>
            Values respecting one-another
          </li>
          <li>
            Enjoys a challenge
          </li>
          <li>
            Self-driven
          </li>
          <li>
            Always learning
          </li>
          <li>
            Optimistic towards challenges
          </li>
        </ul>
      </div>

      <div className={style.videoBox}>
        <img src="https://matthew-resume-website.s3.us-east-2.amazonaws.com/IMG_0966.jpg" alt="Matthew Morgan"/>
        {/* <video autoPlay muted loop id='myVideo'>
          <source src='https://matthew-resume-website.s3.us-east-2.amazonaws.com/timeTravelAgent.mov' type='video/mp4'/>
          Your browser does not support HTML5 video.
        </video> */}
      </div>

    </div>
  )
}

export default AboutMe;