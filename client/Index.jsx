import React from 'react';
import App from './components/App.jsx';
import { render } from 'react-dom';

import allReducers from './components/reducers/index.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);