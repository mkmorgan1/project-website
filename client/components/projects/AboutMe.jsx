import React from 'react';
import style from '../../design/styles.module.css';

const AboutMe = () => {
  return (
    <div className={style.videoAndDescription}>

      <div className={style.description}>
        <h3 className={style.descriptionHeader}>Who Am I?</h3>
        <p>Full-Stack Software Engineer | Landscaper | Massage Therapist | Yoga Instructor</p>
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
        </ul>
      </div>

      <div className={style.videoBox}>
        a picture
        {/* <video autoPlay muted loop id='myVideo'>
          <source src='https://matthew-resume-website.s3.us-east-2.amazonaws.com/timeTravelAgent.mov' type='video/mp4'/>
          Your browser does not support HTML5 video.
        </video> */}
      </div>

    </div>
  )
}

export default AboutMe;