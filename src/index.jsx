import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './style/reset.css';
import './style/reuse.css';
import './style/main.css';
// import './style/signup.css';
import App from './App';
import store from './store';

ReactDOM.render(
  // <Provider store={store}>
  <App />,
  document.getElementById('app')
);
