import React from 'react';
import style from '../../design/styles.module.css';

const HorizontallyScaling = () => {
  return (
    <div className={style.videoAndDescription}>

      <div className={style.description}>
        <h3 className={style.descriptionHeader}>Horizontal Scaling of an Application</h3>
        <p>Loaded 10,000,000 records into a Neo4j and PostgreSQL database and horozontaly scaled the application to handle 20 times more requests per second</p>
        <ul>
          <li>
            Testing locally with postman, <b>Neo4j</b> was faster than <b>PostgreSQL</b>
          </li>
          <li>
            Utilized <b>Axilary.io</b> locally to stress-test and compared the results with <b>NewRelic</b>
          </li>
          <li>
            Launched and Implemented multiple ​<b>nginx​ ​ec2​ load-balancer</b> instances to direct traffic to ​<b>ec2</b>​ copies of the application
          </li>
          <li>
            Stress-Tested launched applicaiton with <b>Loader.io</b> while cross-refrencing <b>NewRelic</b>
          </li>
          <li>
            Horizontally scaled the application to handle ​<b>1000 requests per second​</b> to average at <b>806 ms</b> per response
          </li>
        </ul>
      </div>

      <div className={style.videoBox}>
        <img src="https://matthew-resume-website.s3.us-east-2.amazonaws.com/Screen+Shot+2020-12-18+at+8.18.29+PM.png" alt="Horozantal scaling"/>
        {/* <video autoPlay muted loop id='myVideo'>
          <source src='https://matthew-resume-website.s3.us-east-2.amazonaws.com/timeTravelAgent.mov' type='video/mp4'/>
          Your browser does not support HTML5 video.
        </video> */}
      </div>

    </div>
  )
}

export default HorizontallyScaling;