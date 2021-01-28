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
          <p>Who Am I?</p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <q>
            Born in Rexburg Idaho, I grew up working in my family's landscaping business where I learned the value of hard work. After high school, I started a career in massage therapy which led me to a move to Jackson Hole Wyoming. As an independent contractor, my work ranged from dude ranches in the middle of nowhere to many of the resorts around Jackson Hole. To complement massage therapy, I then became a certified yoga instructor. Eventually I did fall back to my roots and took a job as a landscape construction foreman. After two years of working in the landscape field and leading crews, I rekindled a passion for coding. This love of coding led me to enroll in Hack Reactor for software engineering, and I completed this program in January 2021.
            <br/><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            I have always had a passion for creating and I am driven by the problem-solving nature of the engineering experience. For me, the development of a highly functional and beautiful product is it's own reward. I find joy in cleaning up a messy code and creating a readable structure. Whether it be a woodworking project, an irrigation plan, or an application, I enjoy the process. There is nothing better than taking raw ingredients, or technology, and making something new and I actually enjoy troubleshooting.
            <br/><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            I have a strong drive for community and enjoy collaborating with teams to successfully develop and implement a project. My philosophy is that it’s the little details that make a product that much more beautiful and a clean code structure will help you immensely in the future.
          </q>
      </div>

      <div className={style.videoBox}>
        <img src="https://matthew-resume-website.s3.us-east-2.amazonaws.com/MatthewMorgan.webp" alt="Matthew Morgan"/>
      </div>

    </div>
  )
}

export default AboutMe;