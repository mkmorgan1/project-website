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
            <b>Other:</b> ​Git-Workflow, Command Line Basics, Trello
          </li>
        </ul>
        <details>
          <summary>Who Am I?</summary>
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <q>
            I’m driven by the problem-solving nature of the engineering experience, and creating a product that looks aesthetically beautiful and makes you go “wow.” I find joy in cleaning up a messy code and creating a readable structure. I have always had a passion for creating. Whether it be a wood project, an irrigation plan, or an application, I enjoy the process.  There is nothing better than taking raw ingredients, or technology, and making something new. I actually enjoy troubleshooting. I live for the endorphin rush I get from solving a problem. I have a strong drive for community. Human interaction and collaboration are the meaning of life. My philosophy is that it’s the little details that make a product that much more beautiful and a clean code structure will help you immensely in the future.
            <br/><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Born in Rexburg Idaho, my family owns a landscaping company where I worked up until I turned 20. I went to massage school and started a career in massage therapy and moved to Jackson Hole Wyoming. As an Independent contractor, my work ranged between dude ranches in the middle of nowhere to many of the resorts of Jackson Hole. To complement massage therapy, I then became a certified yoga instructor. Eventually I did fall back to my roots and took a job as a landscape construction foreman. After a couple years leading crews, I rekindled a passion for coding, I had kept on the back burner for many years. I then pulled the trigger, enrolled in Hack Reactor and became a software engineer.
          </q>
        </details>

      </div>

      <div className={style.videoBox}>
        <img src="https://matthew-resume-website.s3.us-east-2.amazonaws.com/IMG_0966.jpg" alt="Matthew Morgan"/>
      </div>

    </div>
  )
}

export default AboutMe;