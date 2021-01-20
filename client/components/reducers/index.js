import { combineReducers } from 'redux';
import toggleFirst from './toggleFirst.js';
import toggleSecond from './toggleSecond.js';

const allReducers = combineReducers({
  First: toggleFirst,
  Second: toggleSecond,
});

export default allReducers;