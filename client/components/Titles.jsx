import React from 'react';
import style from '../design/styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { select1, select2, select3, select4 } from './actions/titleSelectorActions.js';
import { und1, und2, und3, und4 } from './actions/underlineClassActions.js';
import { clicked } from './Functions.jsx';

const Titles = () => {
  const first = useSelector(state => state.first);
  const second = useSelector(state => state.second);
  const third = useSelector(state => state.third);
  const fourth = useSelector(state => state.fourth);
  const underlineClass = useSelector(state => state.underlineClass);

  const dispatch = useDispatch();

  const reducers = [first, second, third, fourth];
  const selectActions = [select1, select2, select3, select4];
  const undActions = [und1, und2, und3, und4];

  const toggleProjects = (selected) => {
    for (let i = 0; i < reducers.length; i++) {
      let title = reducers[i];
      let select = selectActions[i];
      let undAction = undActions[i];
      if (!title && i === selected) {
        dispatch(select());
      }
      if (title === true && i !== selected) {
        dispatch(select());
      }
      if (i === selected) {
        dispatch(undAction());
      }
    }
  }

  return (
    <div className={
      `${style.projectTitles}
      ${(!first && !second && !third && !fourth) ?
        style.welcomeProjectTitles : ''
      }`}>
      <span
        className={`${style.project} ${style.project1}`}
        onClick={() => {
          toggleProjects(0);
          clicked('aboutMe');
        }}
      >
        {`About Me`}
      </span>
      <span
        className={`${style.project} ${style.project2}`}
        onClick={() => {
          toggleProjects(1);
          clicked('phaser');
        }}
      >
        Phaser 3
      </span>
      <span
        className={`${style.project} ${style.project3}`}
        onClick={() => {
          toggleProjects(2);
          clicked('frontEnd');
        }}
      >
        Front End
      </span>
      <span
        className={`${style.project} ${style.project4}`}
        onClick={() => {
          toggleProjects(3);
          clicked('backEnd');
        }}
      >
        Back End
      </span>
      {(first || second || third || fourth) && <div className={`${style.underline} ${style[underlineClass]}`}></div>}
    </div>
  )
}

export default Titles;