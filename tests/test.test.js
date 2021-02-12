import React from 'react';
import ReactDOM from 'react-dom';
import * as redux from 'react-redux';
import * as P from "bluebird";

import App from '../client/components/App.jsx';
import Contact from '../client/components/Contact.jsx';
import Links from '../client/components/Links.jsx';
import Titles from '../client/components/Titles.jsx';
import AboutMe from '../client/components/projects/AboutMe.jsx';
import HorizontallyScaling from '../client/components/projects/HorizontallyScaling.jsx';
import RatingsAndReviews from '../client/components/projects/RatingsAndReviews.jsx';
import TimeTravelAgent from '../client/components/projects/TimeTravelAgent.jsx';
import { clicked } from '../client/functions.js';
import { testGetPostgres, testDeletePostgres } from '../database/index.js';

/*  HANDLES REACT ERRORS WITH MUTED VIDEOS IN JEST  */
Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
  set: () => {},
});

describe('Should render without crashing', () => {
  const Modules = {
    App: App,
    Contact: Contact,
    Link: Links,
    Titles: Titles,
    AboutMe: AboutMe,
    HorizontallyScaling: HorizontallyScaling,
    RatingsAndReviews: RatingsAndReviews,
    TimeTravelAgent: TimeTravelAgent,
  }

  const useSelectorMock = jest.spyOn(redux, 'useSelector')
    .mockReturnValue(false);

  const useDispatchMock = jest.spyOn(redux, 'useDispatch')
    .mockReturnValue(jest.fn());

  /* NOT SURE IF I NEED THIS 👇🏼 */
  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  })

  afterEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  })
  for (let key in Modules) {
    test(`<${key} />`, () => {
      const Module = Modules[key];
      ReactDOM.render(<Module />, document.createElement('div'));
    });
  }
});

describe('Functions', () => {
  test('clicked', () => {
    const checkForTests = () => {
      testGetPostgres((err, res) => {
        err ? err : expect(res.rows.length).toBeGreaterThan(0);
      });
    }
    clicked('test', testDeletePostgres((err, deleted) => {
      err ? console.error(err) : checkForTests();
    }));
  });
});