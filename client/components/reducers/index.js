import { combineReducers } from 'redux';
import { toggleFirst, toggleSecond, toggleThird, toggleFourth } from './toggle.js';
import underlineClass from './underlineClass.js';

const allReducers = combineReducers({
  first: toggleFirst,
  second: toggleSecond,
  third: toggleThird,
  fourth: toggleFourth,
  underlineClass: underlineClass
});

export default allReducers;