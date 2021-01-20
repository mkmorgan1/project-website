import React from 'react';
import style from '../design/styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { select1, select2 } from './actions/index.js';

const Titles = () => {
  const first = useSelector(state => state.First);
  const second = useSelector(state => state.Second);
  const dispatch = useDispatch();

  const toggleProjects = (selected) => {
    if (!selected) {
      dispatch(select1());
      dispatch(select2());
    }
  }

  return (
    <div className={style.projectTitles}>
      <span
        className={style.project1}
        onClick={() => toggleProjects(first)}
      >
        Time Travel Agent
      </span>
      <span
        className={style.project2}
        onClick={() => toggleProjects(second)}
      >
        Rating and Reviews
      </span>
      {first && <div className={style.underline1}></div>}
      {second && <div className={style.underline2}></div>}
    </div>
  )
}

export default Titles;