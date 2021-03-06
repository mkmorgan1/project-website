import React, { useState, useEffect } from 'react';
import style from '../design/styles.module.css';
import Titles from './Titles.jsx';
import Links from './Links.jsx';
import AboutMe from './projects/AboutMe.jsx';
import RatingsAndReviews from './projects/RatingsAndReviews.jsx';
import TimeTravelAgent from './projects/TimeTravelAgent.jsx';
import HorizontallyScaling from './projects/HorizontallyScaling.jsx';
import Contact from './Contact.jsx';
import { useSelector } from 'react-redux';
import { clicked } from '../functions.js';

const App = () => {
  const first = useSelector(state => state.first);
  const second = useSelector(state => state.second);
  const third = useSelector(state => state.third);
  const fourth = useSelector(state => state.fourth);

  useEffect(() => {
    clicked('website open');
  }, []);

  return (
    <div>
      <div className={style.headerBox}>
        <div className={`${style.header} ${
          (!first && !second && !third && !fourth) ? style.welcome : ''}`} >
          <div className={style.welcomeHeader}>
            <h1 className={style.matthew}>Matthew Morgan</h1>
            <h3 className={style.matthewTitle}>Full-Stack Software Engineer</h3>
            <Links />
          </div>
          {(!first && !second && !third && !fourth) && <Titles />}
        </div>
      </div>
      {(first || second || third || fourth) &&
      <div className={style.pageBody}>
        <Titles />
        <div className={style.divider}></div>
        {first && <AboutMe />}
        {second && <TimeTravelAgent />}
        {third && <RatingsAndReviews />}
        {fourth && <HorizontallyScaling />}
      </div>}
        <div className={style.divider}></div>
        <Contact />
    </div>
  );
}

export default App;