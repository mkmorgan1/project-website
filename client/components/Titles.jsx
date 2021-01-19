import React from 'react';
import style from '../design/styles.module.css';

const Titles = () => {
  return (
    <div className={style.projectTitles}>
      <span className={style.project1}>Time Travel Agent</span>
      <span className={style.project2}>Rating and Reviews</span>
      <div className={style.underline}></div>
    </div>
  )
}

export default Titles;