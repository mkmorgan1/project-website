import React from 'react';
import style from '../design/styles.module.css';

const Links = () => {
  return (
    <div>
      {/* Github */}
      <a className={style.link} href='https://github.com/mkmorgan1' target='blank'>
        <i className='fab fa-github-square'></i>
      </a>
      {/* Linkedin */}
      <a className={style.link} href='https://www.linkedin.com/in/mkmorgan1/' target='blank'>
        <i className='fab fa-linkedin'></i>
      </a>
      {/* Resume */}
      <a className={style.link} href='https://drive.google.com/file/d/1dzyoM4vIAj5bXNPqb1pWR-zI8bQq9VLI/view?usp=sharing' target='blank'>
        <i className='fas fa-handshake'></i>
      </a>
    </div>
  )
}


export default Links