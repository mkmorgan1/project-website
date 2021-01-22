import { combineReducers } from 'redux';
import { toggleFirst, toggleSecond, toggleThird, toggleFourth } from './titleSelectorReducer.js';
import underlineClass from './underlineClassReducer.js';

const allReducers = combineReducers({
  first: toggleFirst,
  second: toggleSecond,
  third: toggleThird,
  fourth: toggleFourth,
  underlineClass: underlineClass
});

export default allReducers;