import React from 'react';
import style from '../../design/styles.module.css';

const RatingsAndReviews = () => {
  return (
    <div className={style.videoAndDescription}>

      <div className={style.description}>
        <h3>Ratings And Reviews</h3>
        <p>Application for a booking site</p>
        <ul>
          <li>
            Rendered each component using ​<b>React​</b> for its ​reusability of each component and the use of ​state​ to store information
          </li>
          <li>
            Toggled the view of a ​<b>popup modal</b> ​using ​<b>React hooks</b>
          </li>
          <li>
            Designed app using ​<b>CSS grid​</b> and ​<b>CSS flex-box​</b> for responsive arrangement of components upon page sizing
          </li>
          <li>
            Used a <b>Mysql</b>​ ​database because its relational structure allowed a connection between a ratings and a reviews table
          </li>
        </ul>
      </div>

      <div className={style.videoBox}>
        <video autoPlay muted loop id='myVideo'>
          <source src='https://matthew-resume-website.s3.us-east-2.amazonaws.com/ratings-%26-Reviews.mov' type='video/mp4'/>
          Your browser does not support HTML5 video.
        </video>
      </div>

    </div>
  )
}

export default RatingsAndReviews;